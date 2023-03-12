import { Button } from '@mui/material'
import React from 'react'
import './LandingPage.css'


const LandingPage = () => {

    const login = async () => {
        try {
            window.location.href = 'https://task-manager-backend-bnjq.onrender.com/oauth';
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <div className='LandingPage'>

                <div className='LandingPage-left'>
                    <img src={"https://i.pinimg.com/originals/7c/e9/e3/7ce9e34927261d3b035090cac779fec5.gif"} alt="my" />
                </div>
                <div className='LandingPage-right'>
                <div className='header__left'>
                    <p>Task Manager</p>
                </div>
                    <img src={"https://i.pinimg.com/originals/11/df/2b/11df2bc889722dab6946142dc9c70151.gif"} alt="my" />

                    <Button variant="outlined" className='LandingPage-rightButton' onClick={login}>
                        <img src={"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"} alt="my" width={"20px"} />
                        <p>Sign in with Google</p>
                    </Button>

                </div>
            </div>
        </>
    )
}

export default LandingPage