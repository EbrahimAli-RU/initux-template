import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        width: 400,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'Translate(-50%, -50%)'
    },
});

export default function SimpleCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            {props.children}
        </Card>
    );
}
