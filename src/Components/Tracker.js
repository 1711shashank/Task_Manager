import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import './Tracker.css'

const Tracker = () => {

    const Lessons = [
        {
            id: 11, Date: '11 Jan', dailyLessons: [
                { id: 1, Topic: 'CallBack 1', Description: 'It send Data from component comp to Parent component' },
                { id: 2, Topic: 'CSS', Description: 'Use To style WebPAge' }]
        },
        {
            id: 12, Date: '15 Jan', dailyLessons: [
                { id: 1, Topic: 'CallBack 2', Description: 'It send Data from component comp to Parent component' },
                { id: 2, Topic: 'CSS', Description: 'Use To style WebPAge' }]
        }
    ];

    const addLessons = () => {
        alert("sdkjfg");
    }


    const [lessonsArray, setLessonsArray] = useState(Lessons);

    return (
        <>
            <div className='tracker'>
                <div className='tracker__heading'>
                    <p className='tracker__headingText'>Learning Tracker</p>
                    <IconButton className='tracker__headingIcon' onClick={addLessons}>
                        <AddCircleOutlineSharpIcon />
                    </IconButton>

                </div>

                {lessonsArray.map((lessonsArrayByDate) => (
                    <div className='tracker__components' key={lessonsArrayByDate.id}>

                        <p className='tracker__date'>{lessonsArrayByDate.Date}</p>
                        {lessonsArrayByDate.dailyLessons.map((currLessons) => (
                            <div className='tracker__Topics' key={currLessons.id}>
                                <p>{currLessons.Topic}</p>
                            </div>
                        ))}

                    </div>
                ))}
            </div>
        </>

    )
}

export default Tracker