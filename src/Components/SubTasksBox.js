import React, { useState } from 'react'
import axios from 'axios';
import uniqid from 'uniqid';
import { Button, Dialog, IconButton, Menu, MenuItem } from '@mui/material';
import './SubTasksBox.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PopUpMenu from '../Context/PopUpMenu';



const SubTasksBox = ({ TaskId, subTasks, fetchData }) => {
    const ITEM_HEIGHT = 48;

    const [newSubTask, setNewSubTask] = useState('');

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseOnDelete = ({ activityArrayId, activityId }) => {
        console.log("handleCloseOnDelete", activityArrayId, activityId)
        deleteActivity(activityArrayId, activityId, activityId);
        closeMenu();
    };

    const closeMenu = () => {
        setAnchorEl(null);
    };

    const deleteActivity = (TaskId, SubTaskId) => {

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
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={closeMenu}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 5.5,
                                    width: '20ch',
                                },
                            }}
                        >
                            <PopUpMenu id1={TaskId} id2={subTask.SubTaskId} handleCloseOnDelete={handleCloseOnDelete} />
                        </Menu>
                    </div>
                ))}
            </div>

        </>
    )
}

export default SubTasksBox