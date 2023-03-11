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
                </div>
                <div className='LandingPage-right'>

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