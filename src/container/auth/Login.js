import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AuthNav from "../../component/authNav/AuthNav";
import AuthInput from "../../component/input/AuthInput";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { FormControlLabel, Checkbox, Button } from '@material-ui/core'
import Card from '../../component/card/Card'
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles({
    pos: {
        marginBottom: 12,
    },
    checkAndLoginContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2rem 0.5rem 1rem 0.5rem'
    },
    userIcon: {
        color: 'white',
        marginRight: '.5rem'
    },
    bColor: {
        backgroundColor: '#3f51b5'
    },
    tColor: {
        color: 'white'
    }
});

const Login = () => {
    const [remember, setRemember] = useState(false)
    const classes = useStyles()
    /////Methode for changing checkbox input
    const handleChange = () => {
        setRemember(prevSta => !prevSta)
    }
    const history = useHistory();
    const loginHandler = () => {
        history.push('/admin')
    }
    return (
        <Card>
            <AuthNav loginTitle='Login form' bColor={classes.bColor} tColor={classes.tColor}><PersonAddIcon className={classes.userIcon} /></AuthNav>
            <div>
                <AuthInput label='Login' >
                    <PersonIcon />
                </AuthInput>
                <AuthInput label='Password' >
                    <LockIcon />
                </AuthInput>
            </div>
            <div className={classes.checkAndLoginContainer}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={remember}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember"
                />
                <Button variant="contained" size="small" color="primary" onClick={loginHandler}>
                    login
                </Button>
            </div>
        </Card>
    );
};

export default Login;