import React from "react";
import { Typography, Card } from "@material-ui/core";
//Assets
import logo from "../../assets/CatsocLogo-02.png";
import bongoCat from "../../assets/bongo.gif";
//Styles
import useStyles from "../styles";

const Homepage = () => {
    const classes = useStyles();
    return (
        <>
            <img className={classes.logo} src={logo} alt="Catsoc Logo" />
            <Card className={classes.containerHomepage} variant="outlined">
                <Typography className={classes.title} variant="h5" gutterBottom>
                    Welcome Fellow Feline Friends to USYD Cat Society!
				</Typography>
                <img className={classes.catGif} src={bongoCat} alt="Bongo Cat gif" />
                <Typography className={classes.title} variant="subtitle1" gutterBottom>
                    Within our community, we aim to provide a place to share our love for cats. Whether we are cat lovers with or without cats, we are an accepting, diverse, friendly society that is open about our interests. Feel Free to share cat stories, games, cat cafe excursions, cat meet and greets any questions about cats (tips, tricks, health, and behaviors), volunteering, or possible adoption plans, and many more upcoming activities to come! 
				</Typography>
                <Typography className={classes.title} variant="subtitle1" gutterBottom>
					Signup button goes here
				</Typography>
            </Card>
        </>
    );
};

export default Homepage;