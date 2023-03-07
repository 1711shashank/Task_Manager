import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";


const EditSubTaskModal = ({ taskId, subTaskId, subTaskName, handleCloseOnCancel }) => {


    const [newSubTaskName, setNewSubTaskName] = useState(subTaskName);

    const updateSubTask = () =>{

        const subTaskToBeUpdated = { taskId, subTaskId, newSubTaskName  };
        console.log('Update SubTask',subTaskToBeUpdated);

        // axios.post(`http://localhost:5000/updateSubTask`, { subTaskToBeUpdated })
        // .then((res) => {
        //     console.log('front')
        //     console.log(res.data);
        // })
        // .catch((err) => {
        //     alert("Server error!");
        // });

        // console.log('Inside update function',newSubTaskName);
        handleCloseOnCancel();
    }


    return (
        <div>
            <DialogTitle id="responsive-dialog-title">
                <TextField defaultValue={newSubTaskName} onChange={(e) => setNewSubTaskName(e.target.value)} id="filled-basic" label="Enter New Value" variant="filled" />
            </DialogTitle>

            <DialogActions>
                <Button onClick={handleCloseOnCancel}>
                    Cancel
                </Button>
                <Button onClick={updateSubTask}>
                    Save
                </Button>
            </DialogActions>
        </div>
    );
}

export default EditSubTaskModal