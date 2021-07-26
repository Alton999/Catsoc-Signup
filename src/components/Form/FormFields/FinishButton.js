import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from '../../styles';

const FinishButton = () => {
    const classes = useStyles();
    return (
        <Button className={classes.button} variant="outlined" size="medium" color="primary">Finish</Button>
    )
}

export default FinishButton