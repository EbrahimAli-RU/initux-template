import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AuthNav from "../../component/authNav/AuthNav";
import AuthInput from "../../component/input/AuthInput";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';
import { FormControlLabel, Checkbox, Button } from '@material-ui/core'
import Card from '../../component/card/Card'
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles({
    pos: {
        marginBottom: 12,
    },
    checkAndLoginContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '2rem 0.5rem 1rem 0.5rem'
    },
    userIcon: {
        color: 'black',
        marginRight: '.5rem'
    },
    bColor: {
        backgroundColor: 'white'
    },
    tColor: {
        color: 'black'
    }
});

const ResellerLogin = () => {
    const [remember, setRemember] = useState(false)
    const classes = useStyles()
    /////Methode for changing checkbox input
    const handleChange = () => {
        setRemember(prevSta => !prevSta)
    }
    return (
        <>
            <Card>
                <AuthNav loginTitle='Create New Reseller' bColor={classes.bColor} tColor={classes.tColor} >
                    <CancelIcon className={classes.userIcon} /></AuthNav>
                <div>
                    <AuthInput label='Login' >
                        <AccountBoxIcon />
                    </AuthInput>
                    <AuthInput label='Password' >
                        <LockIcon />
                    </AuthInput>
                    <AuthInput label='Phone' >
                        <PhoneIcon />
                    </AuthInput>
                </div>
                <div className={classes.checkAndLoginContainer}>
                    <Button variant="contained" style={{ marginRight: '1rem' }} >
                        RESET
                    </Button>
                    <Button variant="contained" color="primary">
                        SUBMIT
                    </Button>
                </div>
            </Card>
        </>

    );
};

export default ResellerLogin;