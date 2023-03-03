import React, { useEffect, useState } from 'react'
import './TasksBox.css'
import SubTasksBox from './SubTasksBox'
import axios from 'axios';
import PopUpMenu from '../Modal/PopUpMenu';





const TasksBox = () => {

    const [taskSheet, setTaskSheet] = useState([]);

    const fetchData = () => {
        axios.get(`http://localhost:5000/getTask`)
            .then((res) => {
                setTaskSheet(res.data.TaskSheetData);
            })
            .catch((err) => {
                alert("Server error!");
            });
    }

    useEffect(() => {
        fetchData();
    }, [])

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
            {taskSheet.map((item) => (
                <div className='task' key={item._id}>
                    <div className='task__header'>
                        <p className='task__name'> {item.TaskName}</p>
                            <PopUpMenu id1={item._id} deleteFunction={deleteTask}/>
                    </div>

                    <div className='task__subtask'>
                        <SubTasksBox TaskId={item._id} subTasks={item.SubTasks} fetchData={fetchData} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default TasksBox;
