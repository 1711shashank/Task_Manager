import React, { useContext } from 'react';
import { Button } from '@mui/material'
import './Header.css'
import TaskContext from '../Context/TaskContext';

const Header = () => {

    const { addTask } = useContext(TaskContext);

    const logout = async () => {
        localStorage.removeItem('Email');
        localStorage.removeItem('Name');
        window.location.href = 'https://task-manager-e3i7.onrender.com/';
    }


    return (
        <>
            <div className='header'>
                <div className='header__left'>
                    <p>Task Manager</p>
                </div>
                <div className='header__right'>
                    {
                        (localStorage.getItem('Email') !== null) &&
                        <div>
                            <Button variant="outlined" size="large" onClick={addTask}>Add Task</Button>
                            <Button onClick={logout}> Log Out </Button>
                        </div>
                    }
                </div>
            </div>
        </>

    )
}

export default Header;

