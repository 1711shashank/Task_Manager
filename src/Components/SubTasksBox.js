import React, { useState } from 'react'
import axios from 'axios';
import uniqid from 'uniqid';
import './SubTasksBox.css'
import PopUpMenu from '../Modal/PopUpMenu';

const SubTasksBox = ({ taskId, subTasks, fetchData }) => {

    const [newSubTask, setNewSubTask] = useState('');

    const addNewSubTask = (e) => {
        e.preventDefault();

        const newEntry = { SubTaskId: uniqid(), SubTaskName: newSubTask, SubTaskStatus: false };

        axios
            .post(`http://localhost:5000/addSubTask`, { taskId: taskId, subTask: newEntry })
            .then((res) => {
                fetchData();
            })
            .catch((err) => {
                alert(err);
            });

        setNewSubTask('');
    }


    const deleteSubTask = (taskId, subTaskId) => {

        const subTaskToBeDeleted = { taskId, subTaskId }
        
        axios.post(`http://localhost:5000/deleteSubTask`, { subTaskToBeDeleted })
            .then((res) => {
                console.log(res.data);
                fetchData();
            })
            .catch((err) => {
                alert("Server error!");
            });
    }

    return (
        <>
            <div className='subtasks' action='' onSubmit={addNewSubTask}>

                <form className='subtasks__task'>
                    <input
                        className='subtasks_add'
                        placeholder="Add Task"
                        type='text'
                        value={newSubTask}
                        onChange={(e) => setNewSubTask(e.target.value)}
                        required
                    />
                </form>

                    {subTasks.map((subTask) => (
                        <div className='subtasks__task' key={subTask.SubTaskId}>
                            <p>{subTask.SubTaskName}</p>
                            <PopUpMenu 
                                id1={taskId} 
                                id2={subTask.SubTaskId} 
                                subTaskName={subTask.SubTaskName}
                                deleteFunction={deleteSubTask} 
                                fetchData={fetchData}
                                modalName="Edit_SubTaskModal"/>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default SubTasksBox