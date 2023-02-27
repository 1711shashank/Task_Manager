import React, { useEffect, useState } from 'react'
import CommitIcon from '@mui/icons-material/Commit';
import './SideBar.css'
import { Button, Dialog, IconButton, Menu, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddActivityModal from './AddActivityModal';
import moment from 'moment';
import axios from 'axios';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeletePopUp from '../Components/DeletePopUp';


const SideBar = () => {

    const menuListItems = ['Edit', 'Delete'];
    const ITEM_HEIGHT = 48;

    const [timeSheet, setTimeSheet] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [openModal, setopenModal] = useState(false);
    const [activityArrayId, setActivityArrayId] = useState('');
    const [activityId, setActivityId] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const fetchData = () => {
        axios.get(`http://localhost:5000/getActivity`)
            .then((res) => {
                setTimeSheet(res.data.TimeSheetData);
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

    const openMenu = (menuListItem, id1, id2) => {
        if (menuListItem === 'Edit') {
            console.log(menuListItem);
        }
        else if (menuListItem === 'Delete') {
            handleClickOpenModal(id1, id2);
        }
        closeMenu();
    }

    const handleClickOpenModal = (id1, id2) => {
        setActivityArrayId(id1);
        setActivityId(id2);
        setopenModal(true);
    };

    const handleCloseOnCancel = () => {
        setopenModal(false);
        closeMenu();

    };
    const handleCloseOnDelete = () => {
        deleteActivity(activityArrayId, activityId);
        setopenModal(false);
        closeMenu();

    };

    const closeMenu = () => {
        setAnchorEl(null);
    };

    const deleteActivity = (id1, id2) => {
        axios.post(`http://localhost:5000/deleteActivity`, { _id: id1, id: id2 })
            .then((res) => {
                console.log(res.data);
                fetchData();
            })
            .catch((err) => {
                alert("Server error!");
            });
    }



    return (
        <>

            <div className='timeLine'>
                <div className='timeLine__header'>
                    <Button className='timeLine__addButon' variant="outlined" onClick={() => setShowModal(true)} startIcon={<AddIcon />}>Add</Button>
                </div>
                <div className='timeLine__body'>
                    {timeSheet.map((item1) => (
                        <div className='timeLine__container' key={item1._id}>
                            <div className='timeLine__containerUp'>
                                <CommitIcon className='timeLine__logo' />
                                <p className='timeLine__date'>{moment(item1.Date).format('ll')}</p>
                            </div>
                            <div className='timeLine__containerDown'>
                                <div className='timeLine__day'>
                                    <ol className='timeLine__dayItems'>
                                        {item1.Activity.map((item2) => (
                                            <li className='timeLine__dayItem' key={item2.id}>
                                                <div className='timeLine__dayItemHead'>
                                                    <h2>{item2.Topic}</h2>
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
                                                        {menuListItems.map((menuListItem) => (
                                                            <MenuItem key={menuListItem} onClick={() => openMenu(menuListItem, item1._id, item2.id)}>
                                                                {menuListItem}
                                                            </MenuItem>
                                                        ))}
                                                    </Menu>
                                                    <Dialog
                                                        open={openModal}
                                                        onClose={handleCloseOnCancel}>
                                                        <DeletePopUp handleCloseOnCancel={handleCloseOnCancel} handleCloseOnDelete={handleCloseOnDelete} />
                                                    </Dialog>

                                                </div>
                                                <div className='timeLine__dayItemDescription'>
                                                    <p> {item2.Description} </p>

                                                </div>

                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && <AddActivityModal fetchData={fetchData} closeModal={() => setShowModal(false)} />}

        </>
    )
}

export default SideBar