import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, Button, Container, Grid } from "@material-ui/core";

//Assets
import logo from "../../assets/CatsocLogo-02.png";
import bongoCat from "../../assets/bongo.gif";

// Icons import
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import DiscordIcon from "../../assets/discord.svg";

//Styles
import useStyles from "../styles";

const Homepage = () => {
	const classes = useStyles();
	return (
		<>
			<img className={classes.logo} src={logo} alt="Catsoc Logo" />
			<Card className={classes.containerHomepage} variant="outlined">
				<Container style={{ marginTop: "30px" }}>
					<Typography className={classes.title} variant="h5" gutterBottom>
						Welcome Fellow Feline Friends to USYD Cat Society!
					</Typography>
					<img className={classes.catGif} src={bongoCat} alt="Bongo Cat gif" />
					<Grid container justifyContent="space-around">
						<a
							href="https://www.facebook.com/USYDCatSoc"
							className={classes.anchor}
						>
							<Button>
								<div>
									<img
										src={FacebookIcon}
										alt="Facebook Hyperlink"
										className={classes.socialIcon}
									/>
									<Typography variant="subtitle2">Facebook</Typography>
								</div>
							</Button>
						</a>
						<a
							href="https://www.instagram.com/usydcatsoc/"
							className={classes.anchor}
						>
							<Button>
								<div>
									<img
										src={InstagramIcon}
										alt="Instagram Hyperlink"
										className={classes.socialIcon}
									/>
									<Typography variant="subtitle2">Instagram</Typography>
								</div>
							</Button>
						</a>
						<a href="https://discord.gg/7URdHMveyk" className={classes.anchor}>
							<Button>
								<div>
									<img
										src={DiscordIcon}
										alt="Discord join link"
										className={classes.socialIcon}
									/>
									<Typography variant="subtitle2">Discord</Typography>
								</div>
							</Button>
						</a>
					</Grid>
					<Typography
						className={classes.title}
						variant="subtitle1"
						gutterBottom
					>
						Within our community, we aim to provide a place to share our love
						for cats. Whether we are cat lovers with or without cats, we are an
						accepting, diverse, friendly society that is open about our
						interests. Feel Free to share cat stories, games, cat cafe
						excursions, cat meet and greets any questions about cats (tips,
						tricks, health, and behaviors), volunteering, or possible adoption
						plans, and many more upcoming activities to come!
					</Typography>
					<Button
						component={Link}
						to="/signup"
						variant="contained"
						color="primary"
						className={classes.signupButton}
					>
						Sign up
					</Button>
				</Container>
			</Card>
		</>
	);
};

export default Homepage;
