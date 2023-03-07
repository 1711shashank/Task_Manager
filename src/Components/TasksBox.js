import React, { useEffect, useState } from 'react'
import './TasksBox.css'
import SubTasksBox from './SubTasksBox'
import axios from 'axios';
import PopUpMenu from '../Modal/PopUpMenu';
import TaskContext from '../Context/TaskContext';


const TasksBox = () => {

    const [taskSheet, setTaskSheet] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios.get(`http://localhost:5000/getTask`)
            .then((res) => {
                setTaskSheet(res.data.taskSheetData);
            })
            .catch((err) => {
                alert("Server error!");
            });
    }

    const deleteTask = (_id) => {
        axios.post(`http://localhost:5000/deleteTask`, { _id })
            .then((res) => {
                fetchData();
            })
            .catch((err) => {
                alert("Server error!");
            });
    }



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
