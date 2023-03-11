import React, { useContext, useEffect } from 'react';
import { Button } from '@mui/material'
import './Header.css'
import TaskContext from '../Context/TaskContext';

const Header = () => {

    const { addTask } = useContext(TaskContext);

    const login = async () => {
        try {
            window.location.href = 'https://task-manager-backend-bnjq.onrender.com/oauth';
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        localStorage.removeItem('Email');
        localStorage.removeItem('Name');
        window.location.href = 'https://taskmanagger.netlify.app/';
    }

    useEffect(() => {


        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email');
        const name = urlParams.get('name');

        console.log('useEffect', name, email);


        if (email) {
            localStorage.setItem('Email', email);
            localStorage.setItem('Name', name);
            window.location.href = 'https://taskmanagger.netlify.app/';
        }


    }, []);


    return (
        <>
            <div className='header'>
                <div className='header__left'>
                    <p>Task Manager</p>
                </div>
                <div className='header__right'>

                    {
                        localStorage.getItem('Email') === null
                            ? <Button onClick={login}> Sign in </Button>
                            : <div>
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

