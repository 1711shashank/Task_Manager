import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TaskContext from '../Context/TaskContext';

import axios from "axios";


const EditSubTaskModal = ({ taskId, subTaskId, subTaskName, handleCloseOnCancel }) => {

    const { fetchData } = useContext(TaskContext);

    const [newSubTaskName, setNewSubTaskName] = useState(subTaskName);

    const updateSubTask = () => {

        const subTaskToBeUpdated = { taskId, subTaskId, newSubTaskName };

        axios.post(`https://task-manager-backend-bnjq.onrender.com/updateSubTask`, { subTaskToBeUpdated })
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
                    <TextField id="outlined-basic" variant="outlined" defaultValue={newSubTaskName} onChange={(e) => setNewSubTaskName(e.target.value)} />
                </DialogTitle>

                <DialogActions className='editModalButtons'>
                    <Button variant="outlined" size="large" onClick={handleCloseOnCancel}>
                        Cancel
                    </Button>
                    <Button variant="contained" size="large" type='submit' onClick={updateSubTask}>
                        Save
                    </Button>
                </DialogActions>
            </div>
        </>
    );
}

export default EditSubTaskModal