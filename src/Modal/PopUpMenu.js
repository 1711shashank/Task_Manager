import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const PopUpMenu = ({ id1, id2, deleteFunction }) => {

    return (
        <>
            <Menu menuButton={<MoreVertIcon />} transition>
                <MenuItem>Edit </MenuItem>
                <MenuItem onClick={ () => deleteFunction(id1, id2)}>Delete </MenuItem>
            </Menu>

        </>
    )
}

export default PopUpMenu
