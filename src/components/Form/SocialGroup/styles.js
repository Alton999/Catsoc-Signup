import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	a: {
		textDecoration: "none"
	},
	socialsIntro: {
		marginTop: "1.4rem",
		marginBottom: "0.9rem",
		fontSize: "1.5rem"
	},
	anchor: {
		textDecoration: "none"
	},
	facebook: {
		width: "150px",
		height: "42px",
		backgroundColor: "#4267B2",
		color: "white",
		"&:hover": {
			backgroundColor: "#002366",
			color: "white"
		}
	},
	instagram: {
		width: "150px",
		height: "42px",
		backgroundColor: "#E1306C;",
		color: "white",
		"&:hover": {
			backgroundColor: "#FF0090",
			color: "white"
		}
	},
	discord: {
		width: "150px",
		height: "42px",
		backgroundColor: "#738ADB;",
		color: "white",
		"&:hover": {
			backgroundColor: "#004C81",
			color: "white"
		}
	}
}));
