import React from 'react'
import TasksBox from './TasksBox'
import './Body.css'
import Activity from '../SideBar/Activity'

const Body = () => {
    return (
        <>
            <div className='body'>
                <div className='body__taskBox'><TasksBox /></div>
                <div className='body__activityBar'><Activity/> </div>
            </div>
        </>
    )
}

export default Body