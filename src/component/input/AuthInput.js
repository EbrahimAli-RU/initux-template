import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const AuthInput = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.margin}>
            <Grid container alignItems="flex-end">
                <Grid item>
                    {props.children}
                </Grid>
                <Grid item style={{ display: 'flex', flexGrow: 1 }}>
                    <TextField id="input-with-icon-grid" label={props.label} fullWidth />
                </Grid>
            </Grid>
        </div>
    );
};

export default AuthInput;