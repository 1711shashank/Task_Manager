import React, { useState } from 'react'
import axios from 'axios';
import uniqid from 'uniqid';
import './SubTasksBox.css'
import PopUpMenu from '../Modal/PopUpMenu';

const SubTasksBox = ({ TaskId, subTasks, fetchData }) => {

    const [newSubTask, setNewSubTask] = useState('');

    const addNewSubTask = (e) => {
        e.preventDefault();

        const newEntry = { SubTaskId: uniqid(), SubTaskName: newSubTask, SubTaskStatus: false };

        axios
            .post(`http://localhost:5000/addSubTask`, { TaskId: TaskId, SubTask: newEntry })
            .then((res) => {
                fetchData();
            })
            .catch((err) => {
                alert(err);
            });

        setNewSubTask('');
    }

    const editSubTaskName = () => {
        console.log('editSubTaskName function called');


    }

    const deleteSubTask = (TaskId, SubTaskId) => {
        const subTaskToBeDeleted = { TaskId: TaskId, SubTaskId }
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
                            <PopUpMenu id1={TaskId} id2={subTask.SubTaskId} editFunction={editSubTaskName} deleteFunction={deleteSubTask}/>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default SubTasksBox