import React, { useState } from 'react'
import { Dialog, MenuItem } from '@mui/material';
import DeletePopUp from '../Components/DeletePopUp';


const PopUpMenu = ({ id1, id2, handleCloseOnDelete }) => {

    const menuListItems = ['Edit', 'Delete'];

    const [openModal, setopenModal] = useState(false);
    const [activityArrayId, setActivityArrayId] = useState('');
    const [activityId, setActivityId] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);


    const openMenu = (menuListItem, id1, id2) => {
        if (menuListItem === 'Edit') {
            console.log(menuListItem);
        }
        else if (menuListItem === 'Delete') {
            console.log("openMenu", id1, id2);

            handleClickOpenModal(id1, id2);
        }
        closeMenu();
    }

    const handleClickOpenModal = (id1, id2) => {
        console.log("handleClickOpenModal", id1, id2);
        setActivityArrayId(id1);
        setActivityId(id2);
        setopenModal(true);
    };

    const handleCloseOnCancel = () => {
        setopenModal(false);
        closeMenu();

    };

    const closeMenu = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <>
                {menuListItems.map((menuListItem) => (
                    <MenuItem key={menuListItem} onClick={() => openMenu(menuListItem, id1, id2)}>
                        {menuListItem}
                    </MenuItem>
                ))}
            </>

            <Dialog
                open={openModal}
                onClose={handleCloseOnCancel}>
                <DeletePopUp handleCloseOnCancel={handleCloseOnCancel} handleCloseOnDelete={() => handleCloseOnDelete({ activityArrayId, activityId })} />
            </Dialog>

        </>
    )
}

export default PopUpMenu