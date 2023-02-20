import React, { useContext } from 'react'
import CommitIcon from '@mui/icons-material/Commit';
import './SideBar.css'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskContext from '../Context/TaskContext';

const SideBar = () => {

    const timeSheet = useContext(TaskContext);

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
            {
                timeSheet.dailyActivities.map((item) => (
                    <div className='timeLine' key={item.id}>
                        <div className='timeLine__header'>
                            <Button className='timeLine__addButon' variant="outlined" startIcon={<AddIcon />} onClick={addActivity}>Add</Button>
                        </div>
                        <div className='timeLine__body'>

                            <div className='timeLine__container'>
                                <div className='timeLine__containerDown'>
                                </div>
                            </div>
                            <div className='timeLine__container'>
                                <div className='timeLine__containerUp'>
                                    <CommitIcon className='timeLine__logo' hight="200px" />
                                    <p className='timeLine__date'>{item.Date}</p>
                                </div>
                                <div className='timeLine__containerDown'>
                                    <div className='timeLine__day'>
                                        <ol className='timeLine__dayItems'>

                                            {item.TimeSheet.map((timeSheetItem) => (
                                                <li className='timeLine__dayItem' key={timeSheetItem.id}>
                                                    <h2>{timeSheetItem.Topic}</h2>
                                                    <p>{timeSheetItem.Description}</p>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <div className='timeLine__container'>
                                <div className='timeLine__containerUp'>
                                    <CommitIcon className='timeLine__logo' />
                                    <p className='timeLine__date'>Feb 19, 2023</p>
                                </div>
                                <div className='timeLine__containerDown'>
                                    <div className='timeLine__day'>
                                        <ol className='timeLine__dayItems'>
                                            <li className='timeLine__dayItem'>
                                                <h2>Topice Heading slkfjsdlkmcdsm</h2>
                                                <p>Discription</p>
                                            </li>
                                            <li className='timeLine__dayItem'>
                                                <h2>Topice Heading</h2>
                                                <p> Emmet is an awesome tool. </p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default SideBar