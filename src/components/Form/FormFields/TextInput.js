import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from '../styles';

const TextInput = (props) => {
    const {text} = props
    const classes = useStyles();
    return (
        <TextField className={classes.field} id="outlined-basic" label={text} variant="outlined"></TextField>
    )
}

export default TextInput