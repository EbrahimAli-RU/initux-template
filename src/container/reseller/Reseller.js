import { useState } from 'react';
import { Card, Typography, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import ResellerLogin from '../auth/ResellerLogin';
import Modal from '../../component/modal/ReselerModal';
import ReselerModal from '../../component/modal/ReselerModal';
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        padding: '4px 1rem'
    },
}));

const Reseller = () => {
    const [showLogin, setShowLogin] = useState(true)
    const classes = useStyles();
    return (
        <>
            <ReselerModal />
            <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography style={{ marginLeft: '.5rem' }} variant='h5'>Reseller</Typography>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<AddIcon />}
                        >
                            ADD NEW
                        </Button>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default Reseller;