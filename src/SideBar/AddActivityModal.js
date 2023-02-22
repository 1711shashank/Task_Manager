import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../Context/TaskContext';

const AddActivityModal = ({ closeModal }) => {

    const [topic, setTopic] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const timeSheet = useContext(TaskContext);

    const addActivity = () => {
        const newEntry = {
            id: new Date().getTime(),
            Date: date,
            TimeSheet: [
                { id: 1, Topic: topic, Description: description }
            ]
        };

        timeSheet.addNewActivity(newEntry);
        closeModal();
    }

    useEffect(()=>{
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        };
    },[])


    return (
        <>
            <div className='modal__wrapper'>
            </div>
            <div className='modal__container'>
                <div className='modal'>
                    <h1 className='modal__heading'>Add Today's Activity</h1>
                    <form className='modal__form'>
                        <input className='modal__inputBoxTopic' placeholder='Topic' type='text' onChange={(e) => setTopic(e.target.value)} required></input>
                        <input className='modal__inputBoxTopic' placeholder='Topic' type='date' onChange={(e) => setDate(e.target.value)} required></input>
                        <textarea className='modal__inputBoxDescription' placeholder='Description' onChange={(e) => setDescription(e.target.value)}></textarea>
                        <Button variant="contained" size="large" className='modal__saveButton' onClick={addActivity}> Save </Button>
                    </form>
                </div>
            </div>


        </>
    )
}

export default AddActivityModal