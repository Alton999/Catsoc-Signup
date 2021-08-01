import React from "react";
import { Typography, Container } from "@material-ui/core";

//Assets
import picture from "../../assets/background.gif";

// Custom components
import SocialGroup from "../SocialGroup/SocialGroup";

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
					Unfortunately our bank account is not currently up and running but
					more details about payment coming soon!
				</Typography>
				<Typography className={classes.title} variant="subtitle1" gutterBottom>
					Other than that feel free to enjoy our upcoming free events! Or join
					our social medias!
				</Typography>
				<SocialGroup />
			</Container>
		</>
	);
};

export default SuccessCard;
