import React, { useEffect, useState } from 'react'
import CommitIcon from '@mui/icons-material/Commit';
import './SideBar.css'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddActivityModal from './AddActivityModal';
import moment from 'moment';
import axios from 'axios';

const SideBar = () => {

    const [timeSheet, setTimeSheet] = useState([]);

    const fetchData = () => {
        axios.get(`http://localhost:5000/getActivity`)
            .then((res) => {
                setTimeSheet(res.data.TimeSheetData);
            })
            .catch((err) => {
                alert("Server error!");
            });
    }
    

    useEffect(() => {
        fetchData();
    }, [])

    console.log(timeSheet);

    const [showModal, setShowModal] = useState(false);

    return (
        <>

            <div className='timeLine'>
                <div className='timeLine__header'>
                    <Button className='timeLine__addButon' variant="outlined" onClick={() => setShowModal(true)} startIcon={<AddIcon />}>Add</Button>
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
                                            <li className='timeLine__dayItem' >
                                                <h2>{item2.Topic}</h2>
                                                <p> {item2.Description} </p>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && <AddActivityModal fetchData={fetchData} closeModal={() => setShowModal(false)} />}

        </>
    )
}

export default SideBar