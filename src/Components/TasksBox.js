import React, { useEffect, useState } from 'react'
import './TasksBox.css'
import SubTasksBox from './SubTasksBox'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import { Button, Dialog, IconButton, Menu, MenuItem } from '@mui/material';
import DeletePopUp from './DeletePopUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PopUpMenu from '../Context/PopUpMenu';





const TasksBox = () => {

    const ITEM_HEIGHT = 48;

    const [taskSheet, setTaskSheet] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

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


    const deleteActivity = (_id) => {
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
                            <PopUpMenu id1={item._id} handleCloseOnDelete={handleCloseOnDelete} />

                        </Menu>
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
