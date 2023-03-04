import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import Dialog from '@mui/material/Dialog';
import PopUpDelete from './PopUpDelete';
import PopUpEdit from './PopUpEdit';

const PopUpMenu = ({ id1, id2, editFunction, deleteFunction }) => {

    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);


    const handleCloseOnCancel = () => {
        setDeleteModal(false);
        setEditModal(false);
    };

    const handleCloseOnSave = () => {
        console.log('edit')
        setDeleteModal(false);
        editFunction(id1, id2);
    };
    const handleCloseOnDelete = () => {
        console.log('delete')
        setDeleteModal(false);
        deleteFunction(id1, id2);
    };

    return (
        <>
            <Menu menuButton={<MoreVertIcon />} transition>
                <MenuItem onClick={() => setEditModal(true)}> Edit </MenuItem>
                <MenuItem onClick={() => setDeleteModal(true)}> Delete </MenuItem>
            </Menu>

            <Dialog
                open={editModal}
                onClose={handleCloseOnCancel}>
                <PopUpEdit handleCloseOnCancel={handleCloseOnCancel} handleCloseOnSave={handleCloseOnSave} />
            </Dialog>
            
            <Dialog
                open={deleteModal}
                onClose={handleCloseOnCancel}>
                <PopUpDelete handleCloseOnCancel={handleCloseOnCancel} handleCloseOnDelete={handleCloseOnDelete} />
            </Dialog>

        </>
    )
}

export default PopUpMenu
