import React from 'react'
import TasksBox from './TasksBox'
import './Body.css'
import Activity from '../SideBar/Activity'

const Body = (props) => {
    return (
        <>
            <div className='body'>
                <div className='body__taskBox'><TasksBox props={props}/></div>
                <div className='body__activityBar'><Activity/> </div>
            </div>
        </>
    )
}

export default Body