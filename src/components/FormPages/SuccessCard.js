import React from "react";
import { Typography, Container } from "@material-ui/core";
//Assets
import picture from "../../assets/background.gif";
//Styles
import useStyles from "../styles";

const SuccessCard = () => {
	const classes = useStyles();

	return (
		<>
			<img className={classes.catGif} src={picture} alt="Cat gif" />
			<Container>
				<Typography className={classes.successMessage} variant="h5">
					Thank you for joining CatSoc!
				</Typography>
				<Typography className={classes.title} variant="subtitle1" gutterBottom>
					Extra stuff and payment text goes here :3
				</Typography>
			</Container>
		</>
	);
};

export default SuccessCard;
