import { Button, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DataContext from '../Context/DataContext'


const EditTaskModal = ({ taskId, subTaskId, handleCloseOnCancel, handleCloseOnSave }) => {

    const [taskName, setTaskName] = useState('Task Name UseState');

    const {taskSheet} = useContext(DataContext);
    console.log(taskSheet);

    useEffect(()=>{

        const requiredTask = taskSheet.filter( curEle => curEle._id === taskId);
        setTaskName( requiredTask[0].TaskName );

        console.log(requiredTask[0].TaskName);

    },[])

    const UpdateSubTask = (e) =>{
        // e.preventDefault();
        console.log('Inside update function');
        handleCloseOnCancel();
    }


    return (
        <div>
            <DialogTitle id="responsive-dialog-title">
                <TextField defaultValue={taskName} onChange={(e) => setTaskName(e.target.value)} id="filled-basic" label="Enter New Value" variant="filled" />
            </DialogTitle>

            <DialogActions>
                <Button onClick={handleCloseOnCancel}>
                    Cancel
                </Button>
                <Button onClick={() => UpdateSubTask(taskName)}>
                    Save
                </Button>
            </DialogActions>
        </div>
    );
}

export default EditTaskModal