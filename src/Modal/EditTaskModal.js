import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DataContext from '../Context/DataContext'


const EditTaskModal = ({ taskId, taskName, handleCloseOnCancel }) => {

    const [newTaskName, setNewTaskName] = useState(taskName);

    const {taskSheet} = useContext(DataContext);
    console.log(taskSheet); 

    const UpdateSubTask = (e) =>{
        console.log( 'Inside update function' ,taskId, newTaskName);
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
                <Button onClick={() => UpdateSubTask(newTaskName)}>
                    Save
                </Button>
            </DialogActions>
        </div>
    );
}

export default EditTaskModal