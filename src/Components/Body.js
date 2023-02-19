import React from 'react'
import TasksBox from './TasksBox'
import Tracker from './Tracker'
import './Body.css'

const Body = () => {
    return (
        <>
            <div className='body'>
                <TasksBox />
                {/* <Tracker/> */}
            </div>
        </>

    )
}

export default Body