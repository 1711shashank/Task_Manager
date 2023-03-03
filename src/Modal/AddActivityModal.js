import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import uniqid from 'uniqid';
import axios from "axios";

const AddActivityModal = ({ fetchData, closeModal }) => {

    const [topic, setTopic] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const addActivity = (e) => {
        e.preventDefault();

        const newEntry = {
            Date: date,
            Activity: { id: uniqid(), Topic: topic, Description: description }
        }

        axios
          .post(`http://localhost:5000/addActivity`, {newEntry:newEntry})
          .then((res) => {
              fetchData();
          })
          .catch((err) => {
            alert("Server error!");
          });
        
          closeModal();

    };

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
                        <div className='modal__buttons'>
                        <Button variant="outlined" size="large" className='modal__saveButton' onClick={()=>{closeModal()}}> Cancel </Button>
                        <Button variant="contained" size="large" className='modal__saveButton' type='submit'> Save </Button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default AddActivityModal