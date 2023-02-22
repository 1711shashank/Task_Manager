import React, { useContext, useState } from 'react'
import CommitIcon from '@mui/icons-material/Commit';
import './SideBar.css'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskContext from '../Context/TaskContext';
import AddActivityModal from './AddActivityModal';
import moment from 'moment';

const SideBar = () => {

    const timeSheet = useContext(TaskContext);

    const [showModal, setShowModal] = useState(false);

    return (
        <>

            <div className='timeLine'>
                <div className='timeLine__header'>
                    <Button className='timeLine__addButon' variant="outlined" onClick={() => setShowModal(true)} startIcon={<AddIcon />}>Add</Button>
                </div>
                <div className='timeLine__body'>
                    {timeSheet.dailyActivities.map((item1) => (
                        <div className='timeLine__container' key={item1.id}>
                            <div className='timeLine__containerUp'>
                                <CommitIcon className='timeLine__logo' />
                                <p className='timeLine__date'>{moment(item1.Date).format('ll')}</p>
                            </div>
                            <div className='timeLine__containerDown'>
                                <div className='timeLine__day'>
                                    <ol className='timeLine__dayItems'>
                                        {item1.TimeSheet.map((item2) => (
                                            <li className='timeLine__dayItem' key={item2.id}>
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

            {showModal && <AddActivityModal closeModal={() => setShowModal(false)} />}

        </>
    )
}

export default SideBar