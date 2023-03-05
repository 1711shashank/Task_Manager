import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import axios from "axios";

const EditActivityModal = ({ id1,id2, handleCloseOnCancel }) => {

    const [topic, setTopic] = useState('useState');
    const [date, setDate] = useState('2023-10-10');
    const [description, setDescription] = useState('useState');


    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        };
    }, [])

    useEffect(() => {
        fetchData();
    })

    const fetchData = () => {
        axios.get(`http://localhost:5000/getActivity`)
            .then((res) => {
                return res.data.TimeSheetData;
            })
            .then((timeSheet) => {
                const recodesByDate = timeSheet.filter( (entry) => entry._id === id1);                
                const requiredActivity = recodesByDate[0].Activity.filter( (entry) =>  entry.id === id2);

                setTopic(requiredActivity.Topic);
                setDate(recodesByDate.Date);
                setDescription(requiredActivity.Description);

                // console.log(requiredActivity);

                return 'promiss chining';

            })
            .then((res) => {
                console.log("res",res,topic,date,description);
            })
            .catch((err) => {
                alert("Server error!");
            });
    }

    const UpdateActivity = (e) =>{
        e.preventDefault();
        console.log('Inside update activity function');
        console.log("id1",id1,"id2", id2, topic,date,description);
        handleCloseOnCancel();

    }

    


    return (
        <>
            <div className='modal__wrapper'>
            </div>
            <div className='modal__container'>
                <div className='modal'>
                    <h1 className='modal__heading'>Edit Activity Recode</h1>

                    <form className='modal__form' onSubmit={UpdateActivity}>

                        <div>
                            <TextField id="outlined-required" className='modal__inputBoxTopic' defaultValue={topic} required label="Topic" onChange={(e) => setTopic(e.target.value)} />
                        </div><div> <TextField id="outlined-required" className='modal__inputBoxTopic' defaultValue={date} equired type='date' onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div> <TextField id="outlined-multiline-static" className='modal__inputBoxDescription' defaultValue={description} onChange={(e) => setDescription(e.target.value)} label="Description" multiline rows={6} /></div>
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