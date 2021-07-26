import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from '../../styles';

const FinishButton = ({ children, type }) => {
	const classes = useStyles();
	return (
		<Button
			className={classes.button}
			variant="outlined"
			size="medium"
			color="primary"
			type={type}
		>
			{children}
		</Button>
	);
};

export default FinishButton;
