import React from 'react'
import TasksBox from './TasksBox'
import './Body.css'
import SideBar from '../SideBar/SideBar'
import AddActivityModal from '../SideBar/AddActivityModal'

const Body = () => {
    return (
        <>
            <div className='body'>
                <TasksBox />
                <SideBar/>
            </div>
        </>
    )
}

export default Body