import { Button, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DataContext from '../Context/DataContext'


const EditSubTaskModal = ({ taskId, subTaskId, handleCloseOnCancel }) => {

    const [subTaskName, setSubTaskName] = useState('SubTask Name UseState');

    const {taskSheet} = useContext(DataContext);
    // console.log(taskSheet);

    useEffect(()=>{

        const requiredTask = taskSheet.filter( curEle => curEle._id === taskId);
        const requiredSubTask = requiredTask[0].SubTasks.filter( curEle => curEle.SubTaskId === subTaskId )

        setSubTaskName (requiredSubTask[0].SubTaskName);

        // console.log(requiredSubTask[0].SubTaskName);

    },[])

    const UpdateSubTask = (e) =>{
        // e.preventDefault();
        console.log('Inside update function');
        handleCloseOnCancel();
    }


    return (
        <div>
            <DialogTitle id="responsive-dialog-title">
                <TextField defaultValue={subTaskName} onChange={(e) => setSubTaskName(e.target.value)} id="filled-basic" label="Enter New Value" variant="filled" />
            </DialogTitle>

            <DialogActions>
                <Button onClick={handleCloseOnCancel}>
                    Cancel
                </Button>
                <Button onClick={() => UpdateSubTask(subTaskName)}>
                    Save
                </Button>
            </DialogActions>
        </div>
    );
}

export default EditSubTaskModal