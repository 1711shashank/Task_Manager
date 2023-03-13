import React, { useContext, useState } from 'react'
import './TasksBox.css'
import SubTasksBox from './SubTasksBox'
import TaskContext from '../Context/TaskContext';
import axios from 'axios';
import { Dialog } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteModal from '../Modal/DeleteModal';
import EditTaskModal from '../Modal/EditTaskModal';


const TasksBox = () => {

    const { taskSheet,fetchData } = useContext(TaskContext);

    const [curTaskId, setCurTaskId] = useState('');
    const [curTaskName, setCurTaskName] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const handleCloseOnCancel = () => {
        setDeleteModal(false);
        setEditModal(false);
    };

    const handleCloseOnDelete = () => {
        setDeleteModal(false);
        deleteTask(curTaskId);
    };

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
                        <div>
                                <EditIcon
                                    sx={{ fontSize: 16, color: "#979797", marginRight: "8px" }}
                                    handleCloseOnCancel={handleCloseOnCancel}
                                    onClick={() => { setEditModal(true); setCurTaskId(item._id); setCurTaskName(item.TaskName) }}
                                />
                                <DeleteIcon
                                    sx={{ fontSize: 16, color: "#979797" }}
                                    handleCloseOnCancel={handleCloseOnCancel}
                                    handleCloseOnDelete={handleCloseOnDelete}
                                    onClick={() => { setDeleteModal(true); setCurTaskId(item._id); }}
                                />
                            </div>
                    </div>

                    <div className='task__subtask'>
                        <SubTasksBox taskId={item._id} subTasks={item.SubTasks} />
                    </div>
                </div>
            ))}

            {/* Modals */}     
            <>  
                <Dialog open={editModal} onClose={handleCloseOnCancel}>
                    <EditTaskModal taskId={curTaskId} taskName={curTaskName} handleCloseOnCancel={handleCloseOnCancel} />
                </Dialog>

                <Dialog open={deleteModal} onClose={handleCloseOnCancel}>
                    <DeleteModal handleCloseOnCancel={handleCloseOnCancel} handleCloseOnDelete={handleCloseOnDelete} />
                </Dialog>
            </>
        </>
    )
}

export default TasksBox;
