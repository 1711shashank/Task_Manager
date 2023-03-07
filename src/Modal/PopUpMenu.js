import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import Dialog from '@mui/material/Dialog';
import DeleteModal from './DeleteModal';
import EditTaskModal from './EditTaskModal';
import EditActivityModal from './EditActivityModal';
import EditSubTaskModal from './EditSubTaskModal';

const PopUpMenu = ({ id1, id2, taskName, subTaskName, topic, date, description, deleteFunction, fetchData, modalName }) => {

    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);


    const handleCloseOnCancel = () => {
        setDeleteModal(false);
        setEditModal(false);
    };

    const handleCloseOnDelete = () => {
        console.log('delete', id1, id2)
        setDeleteModal(false);
        deleteFunction(id1, id2);
    };

    return (
        <>
            <Menu menuButton={<MoreVertIcon />} transition>
                <MenuItem onClick={() => setEditModal(true)}> Edit </MenuItem>
                <MenuItem onClick={() => setDeleteModal(true)}> Delete </MenuItem>
            </Menu>

            <Dialog open={editModal} onClose={handleCloseOnCancel}>
                
                    {modalName === "Edit_TaskModal" ? <EditTaskModal taskId={id1} taskName={taskName} handleCloseOnCancel={handleCloseOnCancel} fetchData={fetchData} /> : null }
                    {modalName === "Edit_SubTaskModal" ? <EditSubTaskModal taskId={id1} subTaskId={id2} subTaskName={subTaskName} handleCloseOnCancel={handleCloseOnCancel} fetchData={fetchData}/> : null }
                    {modalName === "Edit_ActivityModal" ? <EditActivityModal id1={id1} id2={id2} topic={topic} date={date} description={description} handleCloseOnCancel={handleCloseOnCancel}  fetchData={fetchData}/> : null }
                
            </Dialog>

            <Dialog
                open={deleteModal}
                onClose={handleCloseOnCancel}>
                <DeleteModal handleCloseOnCancel={handleCloseOnCancel} handleCloseOnDelete={handleCloseOnDelete} />
            </Dialog>

        </>
    )
}

export default PopUpMenu
