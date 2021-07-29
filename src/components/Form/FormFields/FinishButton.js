import React from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "../../styles";

const FinishButton = ({ children, type, disabled }) => {
	const classes = useStyles();
	return (
		<Button
			className={classes.finishButton}
			variant="contained"
			size="medium"
			type={type}
			disabled={disabled}
			endIcon={<SendIcon fontSize="inherit" className={classes.endIcon} />}
		>
			{children}
		</Button>
	);
};

export default FinishButton;
