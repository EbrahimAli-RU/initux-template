import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControlLabel, Checkbox, Button } from '@material-ui/core'
import Modal from '@material-ui/core/Modal';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';
import Card from '../card/Card'
import AuthInput from '../input/AuthInput';
import AuthNav from '../authNav/AuthNav';
import ResellerLogin from '../../container/auth/ResellerLogin';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    pos: {
        marginBottom: 12,
    },
    checkAndLoginContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2rem 0.5rem 1rem 0.5rem'
    }
}));

export default function ReselerModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(true);
    const [remember, setRemember] = useState(false)
    const handleChange = () => {
        setRemember(prevSta => !prevSta)
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <ResellerLogin />
    );

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
