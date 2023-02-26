import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './SubTasksBox.css'

const SubTasksBox = ({ TaskId, subTasks, fetchData }) => {

    const [newSubTask, setNewSubTask] = useState('');


    const addNewSubTask = (e) => {
        e.preventDefault();

        const newEntry = { SubTaskName: newSubTask, SubTaskStatus: false };

        axios
        .post(`http://localhost:5000/addSubTask`, { TaskId: TaskId, SubTask:newEntry})
        .then((res) => {
          console.log(res.data);
            fetchData();
        })
        .catch((err) => {
          alert(err);
        });
      

        // setSubTasks([...subTasks, newEntry]);
        setNewSubTask('');
    }
    
    const removeSubTask = (TaskId,SubTaskName,SubTaskStatus) => {

        const subTaskToBeDeleted = {TaskId:TaskId, SubTask:{SubTaskName:SubTaskName,SubTaskStatus:SubTaskStatus}}

        axios.post(`http://localhost:5000/deleteSubTask`,{subTaskToBeDeleted})
            .then((res) => {
                console.log(res.data.TaskSheetData);
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
                    <div className='subtasks__task' key={subTask._id}>
                        <p>{subTask.SubTaskName}</p>
                        <DeleteOutlineIcon onClick={() => removeSubTask(TaskId, subTask.SubTaskName, subTask.SubTaskStatus)} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SubTasksBox