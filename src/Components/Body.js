import React from 'react'
import TasksBox from './TasksBox'
import './Body.css'
import SideBar from '../SideBar/SideBar'

const Body = () => {
    return (
        <>
            <div className='body'>
                {/* <div className='body__taskBox'><TasksBox /></div> */}
                <div className='body__sideBar'><SideBar/> </div>
            </div>
        </>
    )
}

export default Body