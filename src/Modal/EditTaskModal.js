import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TaskContext from '../Context/TaskContext';
import axios from "axios";
import './modal.css'


const EditTaskModal = ({ taskId, taskName, handleCloseOnCancel }) => {

    const { fetchData } = useContext(TaskContext);

    const [newTaskName, setNewTaskName] = useState(taskName);

    const updateTask = (e) => {
        const taskToBeUpdated = { taskId, newTaskName };
        console.log('Update SubTask', taskToBeUpdated);

        axios.post(`https://task-manager-backend-bnjq.onrender.com/updateTask`, { taskToBeUpdated })
            .then((res) => {
                fetchData();
            })
            .catch((err) => {
                console.log(err);
            });

        handleCloseOnCancel();
    }


    return (
        <>
            <div className='editModal'>
                <h1> Enter New Task Name</h1>
                <DialogTitle className='editModalInput' id="responsive-dialog-title">
                <TextField id="outlined-basic" variant="outlined" defaultValue={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
                </DialogTitle>

                <DialogActions className='editModalButtons'>
                    <Button variant="outlined" size="large" onClick={handleCloseOnCancel}>
                        Cancel
                    </Button>
                    <Button variant="contained" size="large" onClick={updateTask}>
                        Save
                    </Button>
                </DialogActions>
            </div>
        </>
    );
}

export default EditTaskModal