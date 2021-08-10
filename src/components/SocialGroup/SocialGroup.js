import React from "react";

// Material ui imports
import { Grid, Button, Typography } from "@material-ui/core";

import useStyles from "./styles";

const SocialGroup = () => {
	const classes = useStyles();

	return (
		<>
			<Grid container justifyContent="space-between">
				<a
					href="https://www.facebook.com/USYDCatSoc"
					className={classes.anchor}
				>
					<Button className={classes.facebook}>Facebook</Button>
				</a>
				<a
					href="https://www.instagram.com/usydcatsoc/"
					className={classes.anchor}
				>
					<Button className={classes.instagram}>Instagram</Button>
				</a>
				<a href="https://discord.gg/y8RR9rMk" className={classes.anchor}>
					<Button className={classes.discord}>Discord</Button>
				</a>
			</Grid>
		</>
	);
};

export default SocialGroup;
