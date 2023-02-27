import React, { useEffect, useState } from 'react'
import './TasksBox.css'
import SubTasksBox from './SubTasksBox'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DeletePopUp from './DeletePopUp';



const TasksBox = () => {

    const [taskSheet, setTaskSheet] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [taskId, setTaskId] = useState('');

    const handleClickOpen = (id) => {
        setTaskId(id);
        setOpen(true);
    };

    const handleCloseOnCancel = () => {
        setOpen(false);
    };
    const handleCloseOnDelete = () => {
        removeTask(taskId);
        setOpen(false);
    };


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

    const removeTask = (_id) => {
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
                        {/* <DeleteOutlineIcon onClick={() => removeTask(item._id)} /> */}
                        <DeleteOutlineIcon onClick={() => handleClickOpen(item._id)} />
                    </div>
                    <div className='task__subtask'>
                        <SubTasksBox TaskId={item._id} subTasks={item.SubTasks} fetchData={fetchData} />
                    </div>
                </div>
            ))}

            <Dialog
                open={open}
                onClose={handleCloseOnCancel}>
                <DeletePopUp handleCloseOnCancel={handleCloseOnCancel} handleCloseOnDelete={handleCloseOnDelete} />
            </Dialog>
        </>
    )
}

export default TasksBox;
