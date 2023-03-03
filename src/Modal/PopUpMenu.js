import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import Dialog from '@mui/material/Dialog';
import PopUpDelete from './PopUpDelete';

const PopUpMenu = ({ id1, id2, deleteFunction }) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseOnCancel = () => {
        setOpen(false);
    };
    const handleCloseOnDelete = () => {
        setOpen(false);
        deleteFunction(id1,id2);
    };

    return (
        <>
            <Menu menuButton={<MoreVertIcon />} transition>
                <MenuItem>Edit </MenuItem>
                <MenuItem onClick={ handleClickOpen }> Delete </MenuItem>
            </Menu>

            <Dialog
                open={open}
                onClose={handleCloseOnCancel}>
                <PopUpDelete handleCloseOnCancel={handleCloseOnCancel} handleCloseOnDelete={handleCloseOnDelete} />
            </Dialog>

        </>
    )
}

export default PopUpMenu
