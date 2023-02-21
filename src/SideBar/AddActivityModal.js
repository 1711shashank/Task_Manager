import { Button } from '@mui/material';
import React, { useContext, useState } from 'react'
import TaskContext from '../Context/TaskContext';


const AddActivityModal = ({ closeModal }) => {

    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');

    const timeSheet = useContext(TaskContext);

    const addActivity = () => {
        const newEntry = {
            id: new Date().getTime(),
            Date: new Date().toDateString(),
            TimeSheet: [
                { id: 1, Topic: topic, Description: description }
            ]
        };

        timeSheet.addNewActivity(newEntry);
        console.log(timeSheet);

        closeModal();
    }


    return (
        <>
            <div className='modal'>
                <h1 className='modal__heading'>Add Today's Activity</h1>
                <form className='modal__form'>
                    <input className='modal__inputBoxTopic' placeholder='Topic' onChange={(e) => setTopic(e.target.value)} required></input>
                    <textarea className='modal__inputBoxDescription' placeholder='Description'onChange={(e) => setDescription(e.target.value)}></textarea>
                    <Button variant="contained" size="large" className='modal__saveButton' onClick={addActivity}> Save </Button>
                </form>
            </div>

        </>
    )
}

export default AddActivityModal