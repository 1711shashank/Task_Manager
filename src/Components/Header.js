import React, { useState } from 'react';
import { Button, Dialog } from '@mui/material'
import './Header.css'
import AddTaskModal from '../Modal/AddTaskModal';

const Header = () => {

    const [addModal, setAddModal] = useState(false);

    const handleCloseOnCancel = () => {
        setAddModal(false);
    };

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
                            <Button variant="outlined" onClick={() => { setAddModal(true)}}>Add Task</Button>
                            <Button onClick={logout}> Log Out </Button>
                        </div>
                    }
                </div>
            </div>

            {/* Modals */}     
            <>  
                <Dialog open={addModal} onClose={handleCloseOnCancel}>
                    <AddTaskModal handleCloseOnCancel={handleCloseOnCancel} />
                </Dialog>
            </>
        </>

    )
}

export default Header;

