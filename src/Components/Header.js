import React, { useContext, useEffect, useState } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import TaskContext from '../Context/TaskContext';
import { Button } from '@mui/material'
import axios from 'axios';
import './Header.css'

const Header = () => {

    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    useEffect(() => {
        if (user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: { Authorization: `Bearer ${user.access_token}`, Accept: 'application/json' }
            })
            .then((res) => {
                console.log('ressss', res);
                setProfile(res.data);
            })
            .catch((err) => console.log(err));
        }
    }, [user]);



    const taskSheet = useContext(TaskContext);

    const addTask = () => {
        const newEntry = { id: new Date().getTime(), TaskName: 'New Task', SubTasks: [] };
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
                    {profile ? (
                        <Button variant="outlined" onClick={logOut}>Log out</Button>
                    ) : (
                        <Button variant="outlined" onClick={() => login()}>Sign in</Button>
                    )}
                </div>
            </div>
        </>

    )
}

export default Header;

