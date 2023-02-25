import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../Context/TaskContext';

const AddActivityModal = ({ closeModal }) => {

    const [topic, setTopic] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const timeSheet = useContext(TaskContext);
    console.log(timeSheet.dailyActivities);

    const addActivity = () => {
        const newEntry = {
            id: new Date().getTime(),
            Date: '2023-02-25',
            Activity: [{ id: new Date().getTime(), Topic: topic, Description: description }]
        };

        let tempArray = timeSheet.dailyActivities.filter((curEle) => {
            return curEle.Date === date;
        });
        if(tempArray.length)
            tempArray[0].Activity.push(newEntry.Activity[0]);
        else
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
                    <form className='modal__form' onSubmit={addActivity}>
                        <input className='modal__inputBoxTopic' placeholder='Topic' type='text' onChange={(e) => setTopic(e.target.value)} required></input>
                        <input className='modal__inputBoxTopic' placeholder='Topic' type='date' onChange={(e) => setDate(e.target.value)} required></input>
                        <textarea className='modal__inputBoxDescription' placeholder='Description' onChange={(e) => setDescription(e.target.value)}></textarea>
                        <Button variant="contained" size="large" className='modal__saveButton' type='submit'> Save </Button>
                    </form>
                </div>
            </div>


        </>
    )
}

export default AddActivityModal