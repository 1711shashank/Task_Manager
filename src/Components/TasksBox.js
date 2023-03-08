import React, { useEffect, useState } from 'react'
import './TasksBox.css'
import SubTasksBox from './SubTasksBox'
import axios from 'axios';
import PopUpMenu from '../Modal/PopUpMenu';
import TaskContext from '../Context/TaskContext';


// const TasksBox = ({taskSheet,fetchData,deleteTask}) => {
const TasksBox = ({props}) => {

    console.log(props);

    const taskSheet = props.taskSheet;
    const fetchData = props.fetchData;
    const deleteTask = props.deleteTask;

    return (
        <>
            <TaskContext.Provider value={{ fetchData }}>
                {taskSheet.map((item) => (
                    <div className='task' key={item._id}>
                        <div className='task__header'>
                            <p className='task__name'> {item.TaskName}</p>
                            <PopUpMenu id1={item._id} taskName={item.TaskName} deleteFunction={deleteTask}modalName="Edit_TaskModal" />
                        </div>

                        <div className='task__subtask'>

                            <SubTasksBox taskId={item._id} subTasks={item.SubTasks} fetchData={fetchData} />
                        </div>
                    </div>
                ))}
            </TaskContext.Provider>
        </>
    )
}

export default TasksBox;
