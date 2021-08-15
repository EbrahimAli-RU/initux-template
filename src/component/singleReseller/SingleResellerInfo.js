import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography, Switch } from '@material-ui/core'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        padding: '4px 1rem'
    },
    sellerInfo: {
        paddingLeft: '1rem',
        paddingTop: '1rem',
        paddingBottom: '1rem',
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

const SingleResellerInfo = () => {
    const classes = useStyles()
    return (
        <div style={{ display: 'flex' }}>
            <Typography className={`${classes.sellerInfo} ${classes.width4}`} variant='p'>1</Typography>
            <Typography className={`${classes.sellerInfo} ${classes.width8}`} variant='p'>Test</Typography>
            <Typography className={`${classes.sellerInfo} ${classes.width8}`} variant='p'>1234</Typography>
            <Typography className={`${classes.sellerInfo} ${classes.width4}`} variant='p'><FileCopyOutlinedIcon /></Typography>
            <Typography className={`${classes.sellerInfo} ${classes.width8}`} variant='p'>12345678</Typography>
            <Typography className={`${classes.sellerInfo} ${classes.width8}`} variant='p'>0</Typography>
            <Typography className={`${classes.sellerInfo} ${classes.width8}`} variant='p'>0</Typography>
            <Typography className={`${classes.sellerInfo} ${classes.width6}`} variant='p'><Switch
                // checked={state.checkedB}
                // onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            /></Typography>
            <div style={{ paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '1rem' }}>

                <div>
                    <Button variant="contained" size="small" color="primary" className={classes.margin}>
                        EDIT
                    </Button>
                    <Button variant="contained" size="small" color="secondary" className={classes.margin}>
                        PAYMENT
                    </Button>
                    <Button variant="contained" size="small" className={classes.margin}>
                        ADJUST
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default SingleResellerInfo;