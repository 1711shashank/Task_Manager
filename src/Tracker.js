import React, { useState } from 'react'
import './Tracker.css'

const Tracker = () => {

    const Lessons = [
        { id: 11, Date: '01 Jan 2023', dailyLessons: [
            { id: 1,  Topic: 'CallBack 1', Description:'It send Data from component comp to Parent component'},
            { id: 2,  Topic: 'CSS', Description:'Use To style WebPAge'}]
        },
        { id: 12, Date: '02 Jan 2023', dailyLessons: [
            { id: 1,  Topic: 'CallBack 2', Description:'It send Data from component comp to Parent component'},
            { id: 2,  Topic: 'CSS', Description:'Use To style WebPAge'}]
        }
    ];


    const [ lessonsArray, setLessonsArray] = useState(Lessons);

    return (
        <>
            <div className='tracker'>
               <p>Learning Tracker</p>
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