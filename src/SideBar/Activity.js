import React, { useEffect, useState } from 'react'
import CommitIcon from '@mui/icons-material/Commit';
import './Activity.css'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddActivityModal from '../Modal/AddActivityModal';
import moment from 'moment';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import TimeContext from '../Context/TimeContext';
import PopUpMenu from '../Modal/PopUpMenu';


const Activity = () => {

    const [timeSheet, setTimeSheet] = useState([]);
    const [addActivityModal, setAddActivityModal] = useState(false);


    useEffect(() => {
        getActivity();
    }, [])

    const getActivity = () => {
        axios.get(`http://localhost:5000/getActivity?Email=test2@gmail.com`)
            .then((res) => {
                setTimeSheet(res.data.timeSheetData);
            })
            .catch((err) => {
                alert("Server error!");
            });
    }

    const deleteActivity = (id1, id2) => {
        axios.post(`http://localhost:5000/deleteActivity`, { _id: id1, id: id2 })
            .then((res) => {
                console.log(res.data);
                getActivity();
            })
            .catch((err) => {
                alert("Server error!");
            });
    }


    return (
        <>
            <TimeContext.Provider value={{ getActivity }}>
                <div className='timeLine'>

                    <div className='timeLine__header'>
                        <Button className='timeLine__addButon' variant="outlined" onClick={() => setAddActivityModal(true)} startIcon={<AddIcon />}>Add</Button>
                    </div>

                    <div className='timeLine__body'>
                        {timeSheet.map((item1) => (
                            <div className='timeLine__container' key={item1._id}>
                                
                                <div className='timeLine__containerUp'>
                                    <CommitIcon className='timeLine__logo' />
                                    <p className='timeLine__date'>{moment(item1.Date).format('ll')}</p>
                                </div>
                                
                                <div className='timeLine__containerDown'>
                                    <div className='timeLine__day'>
                                        <ol className='timeLine__dayItems'>
                                            {item1.Activity.map((item2) => (
                                                <li className='timeLine__dayItem' key={item2.id}>
                                                    <div className='timeLine__dayItemHead'>
                                                        <h2>{item2.Topic}</h2>
                                                        <PopUpMenu
                                                            id1={item1._id}
                                                            id2={item2.id}
                                                            topic={item2.Topic}
                                                            date={item1.Date}
                                                            description={item2.Description}
                                                            deleteFunction={deleteActivity}
                                                            modalName="Edit_ActivityModal"
                                                        />
                                                    </div>
                                                    <div className='timeLine__dayItemDescription'>
                                                        <p> {item2.Description} </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Dialog
                    open={addActivityModal}
                    onClose={() => setAddActivityModal(false)}>
                    <AddActivityModal handleCloseOnCancel={() => setAddActivityModal(false)} />
                </Dialog>

            </TimeContext.Provider>

        </>
    )
}

export default Activity