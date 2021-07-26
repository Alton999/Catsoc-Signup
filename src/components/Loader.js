import React from "react";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: 10,
		borderRadius: 15,
		marginTop: 15
	}
}));

const Loader = () => {
	const classes = useStyles();
	return <LinearProgress className={classes.root} />;
};

export default Loader;
