import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
    const {text} = props

    return (
        <TextField id="outlined-basic" label={text} variant="outlined"></TextField>
    )
}

export default TextInput