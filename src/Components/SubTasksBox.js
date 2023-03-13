import React, { useContext, useState } from 'react'
import axios from 'axios';
import uniqid from 'uniqid';
import './SubTasksBox.css'
import TaskContext from '../Context/TaskContext';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog } from '@mui/material';
import DeleteModal from '../Modal/DeleteModal';
import EditSubTaskModal from '../Modal/EditSubTaskModal';


const SubTasksBox = ({ taskId, subTasks }) => {

    const { fetchData } = useContext(TaskContext);

    const [newSubTask, setNewSubTask] = useState('');
    const [curSubTaskId, setCurSubTaskId] = useState('');
    const [curSubTaskName, setCurSubTaskName] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);


    const handleCloseOnCancel = () => {
        setDeleteModal(false);
        setEditModal(false);
    };

    const handleCloseOnDelete = () => {
        setDeleteModal(false);
        deleteSubTask(taskId, curSubTaskId);
    };

    const addNewSubTask = (e) => {
        e.preventDefault();

        const newEntry = { SubTaskId: uniqid(), SubTaskName: newSubTask, SubTaskStatus: false };

        axios
            .post(`https://task-manager-backend-bnjq.onrender.com/addSubTask`, { taskId: taskId, subTask: newEntry })
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

        axios.post(`https://task-manager-backend-bnjq.onrender.com/deleteSubTask`, { subTaskToBeDeleted })
            .then((res) => {
                fetchData();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className='subtasks' action='' onSubmit={addNewSubTask}>

                <form className='subtasks__task'>
                    <input
                        className='subtasks_add'
                        placeholder="Add Sub Task"
                        type='text'
                        value={newSubTask}
                        onChange={(e) => setNewSubTask(e.target.value)}
                        required
                    />
                </form>

                {
                    subTasks.map((subTask) => (
                        <div className='subtasks__task' key={subTask.SubTaskId}>
                            <p>{subTask.SubTaskName}</p>
                            <div>
                                <EditIcon
                                    sx={{ fontSize: 12, color: "#979797", marginRight: "5px" }}
                                    handleCloseOnCancel={handleCloseOnCancel}
                                    onClick={() => { setEditModal(true); setCurSubTaskId(subTask.SubTaskId); setCurSubTaskName(subTask.SubTaskName) }}
                                />

                                <DeleteIcon
                                    sx={{ fontSize: 12, color: "#979797" }}
                                    handleCloseOnCancel={handleCloseOnCancel}
                                    handleCloseOnDelete={handleCloseOnDelete}
                                    onClick={() => { setDeleteModal(true); setCurSubTaskId(subTask.SubTaskId); }}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>


            {/* Modals */}     
            <>  
                <Dialog open={editModal} onClose={handleCloseOnCancel}>
                    <EditSubTaskModal taskId={taskId} subTaskId={curSubTaskId} subTaskName={curSubTaskName} handleCloseOnCancel={handleCloseOnCancel} />
                </Dialog>

                <Dialog open={deleteModal} onClose={handleCloseOnCancel}>
                    <DeleteModal handleCloseOnCancel={handleCloseOnCancel} handleCloseOnDelete={handleCloseOnDelete} />
                </Dialog>
            </>
        </>
    )
}

export default SubTasksBox