import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";

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
				{/* <Typography
					className={classes.successMessage}
					variant="h5"
					gutterBottom
				>
					Thank you for joining CatSoc!
				</Typography> */}
				<Grid justifyContent="center" className={classes.banner}>
					<Typography variant="h3" color="secondary">
						Temporary Membership
					</Typography>
				</Grid>
				<Typography className={classes.title} variant="subtitle1" gutterBottom>
					We wish you a very warm welcome to CatSoc! Currently due to the
					COVID-19 situation we have a FREE temporary membership for the rest of
					2021. Meaning you'll get all the benefits of a being a full member
					which expires at the end of this semester.
				</Typography>
				<SocialGroup />
			</Container>
		</>
	);
};

export default SuccessCard;
