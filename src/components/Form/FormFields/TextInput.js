// React imports
import React from "react";

// Material UI imports
import {
	TextField,
	FormControl,
	Typography,
	InputAdornment
} from "@material-ui/core";

// Icon imports
import CheckIcon from "@material-ui/icons/Check";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

// Styles
import useStyles from "../../styles";

const TextInput = (props) => {
	const { label, name, value, type, onChange, error } = props;
	const classes = useStyles();

	// This is to display error message for the email field
	const errorMessage = () => {
		if (label === "Email") {
			if (error) {
				return (
					<div className={classes.errorMessageContainer}>
						<ErrorOutlineIcon />
						<Typography component={"span"} className={classes.errorMessageText}>
							Please enter a valid email.
						</Typography>
					</div>
				);
			}
		} else if (label === "USU Number") {
			if (error) {
				return (
					<div className={classes.errorMessageContainer}>
						<ErrorOutlineIcon />
						<Typography component={"span"} className={classes.errorMessageText}>
							USU number is 7 digits.
						</Typography>
					</div>
				);
			}
		}
	};
	const successMessage = () => {
		if (value !== "") {
			if (!error) {
				return (
					<div className={classes.successMessageContainer}>
						<CheckIcon />
					</div>
				);
			} else {
				return "";
			}
		}
	};

	return (
		<FormControl>
			{/* Set all text fields to required */}
			<TextField
				className={classes.field}
				name={name}
				id={label}
				label={label}
				value={value}
				type={type}
				onChange={onChange}
				variant="outlined"
				required={true}
				// error={settingErrors()}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							{error ? errorMessage() : successMessage()}
						</InputAdornment>
					)
				}}
			/>
		</FormControl>
	);
};

export default TextInput;
