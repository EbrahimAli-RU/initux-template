import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(1),
    },
    textField: {
        width: '25ch',
    },
}));

export default function SearchBox() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        search: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div>
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="search">Search</InputLabel>
                <Input
                    id="search"
                    type='text'
                    value={values.password}
                    onChange={handleChange('search')}
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    );
}
