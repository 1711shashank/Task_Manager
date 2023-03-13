import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TaskContext from '../Context/TaskContext';
import './modal.css'


const AddTaskModal = ({ handleCloseOnCancel }) => {

    const { addTask } = useContext(TaskContext);
    
    const [taskName, setTaskName] = useState('Untitled Task');

    return (
        <>
            <div className='editModal'>
                <h1> Enter Task Name</h1>
                <DialogTitle className='editModalInput' id="responsive-dialog-title">
                    <TextField id="outlined-basic" variant="outlined" placeholder="Untitled Task" onChange={(e) => setTaskName(e.target.value)} />
                </DialogTitle>

                <DialogActions className='editModalButtons'>
                    <Button variant="outlined" size="large" onClick={handleCloseOnCancel}>
                        Cancel
                    </Button>
                    <Button variant="contained" size="large" onClick={() => {addTask(taskName); handleCloseOnCancel();}}>
                        Add
                    </Button>
                </DialogActions>
            </div>
        </>
    );
}

export default AddTaskModal