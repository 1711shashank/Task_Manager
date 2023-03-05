import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const EditTaskModal = ({ handleCloseOnCancel, handleCloseOnSave }) => {

    const [newValue, setNewValue] = useState('');


    return (
        <div>
            <DialogTitle id="responsive-dialog-title">
                <TextField onChange={(e) => setNewValue(e.target.value)} id="filled-basic" label="Enter New Value" variant="filled" />
            </DialogTitle>

            <DialogActions>
                <Button onClick={handleCloseOnCancel}>
                    Cancel
                </Button>
                <Button onClick={() => handleCloseOnSave(newValue)}>
                    Save
                </Button>
            </DialogActions>
        </div>
    );
}

export default EditTaskModal