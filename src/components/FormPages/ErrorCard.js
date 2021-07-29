// React imports
import React from "react";

// Material UI imports
import { Typography, Container, Button } from "@material-ui/core";

//Assets
import picture from "../../assets/background.gif";

//Styles
import useStyles from "../styles";

const ErrorCard = ({ handleHomeButton }) => {
	const classes = useStyles();

	return (
		<>
			<img className={classes.catGif} src={picture} alt="Cat gif" />
			<Container>
				<Typography className={classes.errorMessage} variant="h5">
					Sorry there was an error in your request!
				</Typography>
				<Button
					variant="outlined"
					className={classes.homeButton}
					onClick={(e) => handleHomeButton(e)}
				>
					Home
				</Button>
			</Container>
		</>
	);
};

export default ErrorCard;
