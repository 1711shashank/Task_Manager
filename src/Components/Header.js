import React, { useContext, useEffect } from 'react';
import { Button } from '@mui/material'
import './Header.css'
import TaskContext from '../Context/TaskContext';

const Header = () => {

    const { addTask } = useContext(TaskContext);

    const login = async () => {
        try {
            window.location.href = 'http://localhost:5000/oauth';
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // if(!localStorage.getItem('email')){

        console.log('useEffect')

        const urlParams = new URLSearchParams(window.location.search);

        const email = urlParams.get('email');
        if (email) {
            localStorage.setItem('email', email);
            console.log('Before')
            window.location.href = 'http://localhost:3000';
            console.log('After')
        }

       
        // }
    }, []);


    return (
        <>
            <div className='header'>
                <div className='header__left'>
                    <p>Task Manager</p>
                </div>
                <div className='header__right'>
                    <Button variant="outlined" size="large" onClick={addTask}>Add Task</Button>
                    <Button variant="outlined" onClick={() => login()}>Sign in</Button>
                </div>
            </div>
        </>

    )
}

export default Header;

