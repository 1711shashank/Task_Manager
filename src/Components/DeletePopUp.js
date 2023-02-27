import { Button } from '@mui/material';
import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const DeletePopUp = ({ handleCloseOnCancel, handleCloseOnDelete}) => {


    return (
        <div>
            <DialogTitle id="responsive-dialog-title">
                Are you sure to delete this Task?
            </DialogTitle>
            
            <DialogActions>
                <Button onClick={handleCloseOnCancel}>
                    No
                </Button>
                <Button onClick={handleCloseOnDelete}>
                    Yes
                </Button>
            </DialogActions>
        </div>
    );
}

export default DeletePopUp