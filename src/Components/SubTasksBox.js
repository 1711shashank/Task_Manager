import React, { useState } from 'react'
import axios from 'axios';
import uniqid from 'uniqid';
import FlipMove from 'react-flip-move';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './SubTasksBox.css'
import { Dialog } from '@mui/material';
import DeletePopUp from './DeletePopUp';

const SubTasksBox = ({ TaskId, subTasks, fetchData }) => {

    const [newSubTask, setNewSubTask] = useState('');
    const [open, setOpen] = React.useState(false);
    const [deleteTaskId, setDeleteTaskId] = useState('');
    const [deleteSubTaskId, setDeleteSubTaskId] = useState('');

    const handleClickOpen = (taskId, subTaskId) => {
        setDeleteTaskId(taskId);
        setDeleteSubTaskId(subTaskId);
        setOpen(true);
    };

    const handleCloseOnCancel = () => {
        setOpen(false);
    };
    const handleCloseOnDelete = () => {
        removeSubTask(deleteTaskId, deleteSubTaskId);
        setOpen(false);
    };


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

    const removeSubTask = (TaskId, SubTaskId) => {

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
                {/* <FlipMove> */}

                    {subTasks.map((subTask) => (
                        <div className='subtasks__task' key={subTask.SubTaskId}>
                            <p>{subTask.SubTaskName}</p>
                            {/* <DeleteOutlineIcon onClick={() => removeSubTask(TaskId, subTask.SubTaskId)} /> */}
                            <DeleteOutlineIcon onClick={() => handleClickOpen(TaskId, subTask.SubTaskId)} />
                        </div>
                    ))}
                {/* </FlipMove> */}

                <Dialog
                open={open}
                onClose={handleCloseOnCancel}>
                <DeletePopUp handleCloseOnCancel={handleCloseOnCancel} handleCloseOnDelete={handleCloseOnDelete} />
            </Dialog>
            </div>

        </>
    )
}

export default SubTasksBox