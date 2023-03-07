import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TaskContext from '../Context/TaskContext';
import axios from "axios";


const EditTaskModal = ({ taskId, taskName, handleCloseOnCancel }) => {

    const { fetchData } = useContext(TaskContext);

    const [newTaskName, setNewTaskName] = useState(taskName);

    const updateSubTask = (e) =>{
        const taskToBeUpdated = { taskId, newTaskName };
        console.log('Update SubTask',taskToBeUpdated);

        axios.post(`http://localhost:5000/updateTask`, { taskToBeUpdated })
        .then((res) => {
            fetchData();
        })
        .catch((err) => {
            alert("Server error!");
        });

        handleCloseOnCancel();
    }


    return (
        <div>
            <DialogTitle id="responsive-dialog-title">
                <TextField defaultValue={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} id="filled-basic" label="Enter New Value" variant="filled" />
            </DialogTitle>

            <DialogActions>
                <Button onClick={handleCloseOnCancel}>
                    Cancel
                </Button>
                <Button onClick={() => updateSubTask(newTaskName)}>
                    Save
                </Button>
            </DialogActions>
        </div>
    );
}

export default EditTaskModal