import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import axios from "axios";

const EditActivityModal = ({ id1,id2, topic, date, description, handleCloseOnCancel }) => {

    const [newTopic, setNewTopic] = useState(topic);
    const [newDate, setNewDate] = useState(date);
    const [newDescription, setNewDescription] = useState(description);


    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        };
    }, [])


    const updateActivity = (e) =>{
        e.preventDefault();
        console.log('Inside update activity function');
        console.log("id1",id1,"id2", id2, newTopic,newDate,newDescription);
        handleCloseOnCancel();

        const activityToBeUpdated = { id1, id2, newTopic,newDate,newDescription };
        console.log('Update ACtivity', activityToBeUpdated);

        axios.post(`http://localhost:5000/updateActivity`, { activityToBeUpdated })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            alert("Server error!");
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
                            <TextField id="outlined-required" className='modal__inputBoxTopic' defaultValue={newTopic} required label="newTopic" onChange={(e) => setNewTopic(e.target.value)} />
                        </div><div> <TextField id="outlined-required" className='modal__inputBoxTopic' defaultValue={newDate} equired type='newDate' onChange={(e) => setNewDate(e.target.value)} />
                        </div>
                        <div> <TextField id="outlined-multiline-static" className='modal__inputBoxDescription' defaultValue={newDescription} onChange={(e) => setNewDescription(e.target.value)} label="newDescription" multiline rows={6} /></div>
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