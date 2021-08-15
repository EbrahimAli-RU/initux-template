import { makeStyles } from '@material-ui/core/styles';
import AuthNav from "../../component/authNav/AuthNav";
import AuthInput from "../../component/input/AuthInput";
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';
import { Button } from '@material-ui/core'
import Card from '../../component/card/Card'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

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
        marginRight: '.5rem',
        cursor: 'pointer'
    },
    bColor: {
        backgroundColor: 'white'
    },
    tColor: {
        color: 'black'
    },
});

const ResellerLogin = (props) => {
    const classes = useStyles()

    return (
        <>
            <Card>
                <AuthNav loginTitle='Create New Reseller' tColor={classes.tColor} >
                    <CancelOutlinedIcon onClick={props.handlerClode} className={classes.userIcon} /></AuthNav>
                <div>
                    <AuthInput label='UserName' >
                        <AccountBoxOutlinedIcon />
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