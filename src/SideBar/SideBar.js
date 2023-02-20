import React, { useContext } from 'react'
import CommitIcon from '@mui/icons-material/Commit';
import './SideBar.css'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskContext from '../Context/TaskContext';

const SideBar = () => {

    const timeSheet = useContext(TaskContext);
    console.log(timeSheet.dailyActivities);


    const addActivity = () => {
        const newEntry = {
            id: new Date().getTime(),
            Date: new Date().toDateString(),
            TimeSheet: [
                { id: 1, Topic: 'Topic Heading 1', Description: 'Description' },
                { id: 2, Topic: 'Topic Heading 2', Description: '' }
            ]
        };

        timeSheet.addNewActivity(newEntry);
        console.log(timeSheet.dailyActivities);
    }

    return (
        <>
            <div className='timeLine'>
                <div className='timeLine__header'>
                    <Button className='timeLine__addButon' variant="outlined" onClick={addActivity} startIcon={<AddIcon />}>Add</Button>
                </div>
                <div className='timeLine__body'>
                    {timeSheet.dailyActivities.map((item1) => (
                        <div className='timeLine__container' key={item1.id}>
                            <div className='timeLine__containerUp'>
                                <CommitIcon className='timeLine__logo' />
                                <p className='timeLine__date'>{item1.Date}</p>
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
        </>
    )
}

export default SideBar