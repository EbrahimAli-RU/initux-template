import { useState } from 'react';
import { Card, Typography, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import ReselerModal from '../../component/modal/ReselerModal';
import SearchBox from '../../component/input/SearchBox';
import SingleResellerInfo from '../../component/singleReseller/SingleResellerInfo';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        padding: '4px 1rem'
    },
    sellerInfo: {
        paddingLeft: '1rem',

        borderRight: '1px solid black'
    },
    width4: {
        width: '4rem'
    },
    width8: {
        width: '8rem'
    },
    width6: {
        width: '6rem'
    },
    margin: {
        margin: '0 8px',
    },
}));

const Reseller = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    });
    const [openModel, setOpenModel] = useState(false);

    const handleClose = () => {
        setOpenModel(prevState => !prevState);
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <>
            <ReselerModal open={openModel} handler={handleClose} />
            <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography style={{ marginLeft: '.5rem' }} variant='h5'>Reseller</Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <SearchBox />
                        <Button
                            onClick={handleClose}
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
                <div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', borderBottom: '1px solid black', paddingTop: '2rem' }}>
                        <Typography className={`${classes.sellerInfo} ${classes.width4}`} variant='p'>#</Typography>
                        <Typography className={`${classes.sellerInfo} ${classes.width8}`} variant='p'>Name</Typography>
                        <Typography className={`${classes.sellerInfo} ${classes.width8}`} variant='p'>Password</Typography>
                        <Typography className={`${classes.sellerInfo} ${classes.width4}`} variant='p'>Copy</Typography>
                        <Typography className={`${classes.sellerInfo} ${classes.width8}`} variant='p'>Phone</Typography>
                        <Typography className={`${classes.sellerInfo} ${classes.width8}`} variant='p'>Balance</Typography>
                        <Typography className={`${classes.sellerInfo} ${classes.width8}`} variant='p'>Due</Typography>
                        <Typography className={`${classes.sellerInfo} ${classes.width6}`} variant='p'>Status</Typography>
                        <Typography style={{ paddingLeft: '1rem' }} variant='p'>Action</Typography>
                    </div>
                    <SingleResellerInfo />
                    <SingleResellerInfo />
                </div>

            </Card>
        </>
    );
};

export default Reseller;