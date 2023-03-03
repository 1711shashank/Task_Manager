import { Button } from '@mui/material';
import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const PopUpDelete = ({ handleCloseOnCancel, handleCloseOnDelete}) => {


    return (
        <div>
            <DialogTitle id="responsive-dialog-title">
                Are you sure you want to delete this item? This action cannot be undone.
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

export default PopUpDelete