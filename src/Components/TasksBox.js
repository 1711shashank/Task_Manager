import React, { useContext } from 'react'
import './TasksBox.css'
import SubTasksBox from './SubTasksBox'
import PopUpMenu from '../Modal/PopUpMenu';
import TaskContext from '../Context/TaskContext';
import axios from 'axios';


const TasksBox = () => {

    const { taskSheet,fetchData } = useContext(TaskContext);

    const deleteTask = (_id) => {
        axios.post(`https://task-manager-backend-bnjq.onrender.com/deleteTask`, { _id })
            .then((res) => {
                fetchData();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            {taskSheet.map((item) => (
                <div className='task' key={item._id}>
                    <div className='task__header'>
                        <p className='task__name'> {item.TaskName}</p>
                        <PopUpMenu id1={item._id} taskName={item.TaskName} deleteFunction={deleteTask} modalName="Edit_TaskModal" />
                    </div>

                    <div className='task__subtask'>
                        <SubTasksBox taskId={item._id} subTasks={item.SubTasks} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default TasksBox;
