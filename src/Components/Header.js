import { Button } from '@mui/material'
import React, { useContext } from 'react'
import TaskContext from '../Context/TaskContext';
import './Header.css'

const Header = () => {

    const taskSheet = useContext(TaskContext);

    const addTask = () => {
        const newEntry = { id: new Date().getTime(), TaskName: 'New Task', SubTasks: []};
        taskSheet.addNewTask(newEntry);
    }

    return (
        <>
            <div className='header'>
                <div className='header__left'>
                    <p>Task Manager</p>
                </div>
                <div className='header__right'>
                    <Button variant="outlined" size="large" onClick={addTask}>Add Task</Button>
                    <Button variant="outlined" size="large">Sign Up</Button>
                    <Button variant="contained" size="large">Sign In</Button>
                </div>
            </div>
        </>

    )
}

export default Header;

