import React, { useContext, useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import TimeContext from '../Context/TimeContext';

import axios from "axios";

const EditActivityModal = ({ id1, id2, topic, date, description, handleCloseOnCancel }) => {

    const { getActivity } = useContext(TimeContext);

    const [newTopic, setNewTopic] = useState(topic);
    const [newDate, setNewDate] = useState(date);
    const [newDescription, setNewDescription] = useState(description);


    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        };
    }, [])


    const updateActivity = (e) => {
        e.preventDefault();

        const email = localStorage.getItem('Email');

        const activityToBeUpdated = { id1, id2, email, newTopic, newDate, newDescription };

        axios.post(`https://task-manager-backend-bnjq.onrender.com/updateActivity`, { activityToBeUpdated })
            .then((res) => {
                getActivity();
            })
            .catch((err) => {
                console.log(err);
            });

        handleCloseOnCancel();

    }



    return (
        <>
            <div className='modal__wrapper'>
            </div>
            <div className='modal__container'>
                <div className='modal'>
                    <h1 className='modal__heading'>Edit Activity Recode</h1>

                    <form className='modal__form' onSubmit={updateActivity}>
                        <div>
                            <TextField id="outlined-required" className='modal__inputBoxTopic' defaultValue={newTopic} required onChange={(e) => setNewTopic(e.target.value)} />
                        </div>
                        <div>
                            <TextField id="outlined-required" className='modal__inputBoxTopic' defaultValue={newDate} required type='date' onChange={(e) => setNewDate(e.target.value)} />
                        </div>
                        <div>
                            <TextField id="outlined-multiline-static" className='modal__inputBoxDescription' defaultValue={newDescription} onChange={(e) => setNewDescription(e.target.value)} multiline rows={6} />
                        </div>
                        <div className='modal__buttons'>
                            <Button variant="outlined" size="large" className='modal__saveButton' onClick={handleCloseOnCancel}> Cancel </Button>
                            <Button variant="contained" size="large" className='modal__saveButton' type='submit'> Save </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditActivityModal