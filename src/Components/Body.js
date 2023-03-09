import React from 'react'
import TasksBox from './TasksBox'
import Activity from '../SideBar/Activity'
import './Body.css'

const Body = () => {
    return (
        <>
            <div className='body'>
                <div className='body__taskBox'><TasksBox/></div>
                <div className='body__activityBar'><Activity/> </div>
            </div>
        </>
    )
}

export default Body