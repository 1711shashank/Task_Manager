import { Button } from '@mui/material'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { DataBase } from '../Context/Context';
import './Header.css'

const Header = () => {

    const data = useContext(DataBase);
    const [TasksDataTable, setTasksDataTable] = useState(data[0].TaskSheet);
    
    const addTask = () => {

        const newEntry = { 
            id: 13, 
            TaskName: 'New Task', 
            SubTasksFinished : 1, 
            SubTasksTotal:5, 
            SubTasks: [{ id: 1, SubTaskName: "new Read Redux", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] 
        };
        console.log(TasksDataTable);
        setTasksDataTable([...TasksDataTable,newEntry]);
    }

    useEffect(()=>{
        console.log("UseEffect");
    }, [TasksDataTable]);


    return (
        <>
            <div className='header'>
                <div className='header__left'>
                    <p>Task Manager</p>
                </div>
                <div className='header__right'>
                    <Button variant="outlined" size="large" onClick={addTask}>Add Task</Button>
                    <Button variant="outlined" size="large">Sign Up</Button>
                    <Button variant="contained" size="large">Sign In</Button>
                </div>
            </div>
        </>

    )
}

export default Header