import { Button } from '@mui/material'
import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header__left'>
                    <p>Task Manager</p>
                </div>
                <div className='header__right'>
                    <Button variant="outlined" size="large">Sign Up</Button>
                    <Button variant="contained" size="large">Sign In</Button>
                </div>
            </div>
        </>

    )
}

export default Header