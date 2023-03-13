import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import Dialog from '@mui/material/Dialog';
import DeleteModal from './DeleteModal';
import EditActivityModal from './EditActivityModal';

const PopUpMenu = ({ id1, id2, taskName, subTaskName, topic, date, description, deleteFunction, modalName }) => {

    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);


    const handleCloseOnCancel = () => {
        setDeleteModal(false);
        setEditModal(false);
    };

    const handleCloseOnDelete = () => {
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
                <EditActivityModal id1={id1} id2={id2} topic={topic} date={date} description={description} handleCloseOnCancel={handleCloseOnCancel} />  
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
