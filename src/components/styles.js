import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	back: {
		[theme.breakpoints.down("sm")]: {
			position: "absolute",
			top: 5,
			left: -30,
			backgroundColor: "none",
			color: "black"
		},
		[theme.breakpoints.up("md")]: {
			position: "absolute",
			top: 5,
			left: -60,
			backgroundColor: "none",
			color: "black"
		},
		position: "absolute",
		top: 5,
		left: -60,
		backgroundColor: "none",
		color: "black"
	},
	logo: {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: "30px",
		marginTop: "30px",
		width: "200px"
	},

	container: {
		[theme.breakpoints.down("sm")]: {
			width: "90%",
			marginBottom: "40px"
		},
		[theme.breakpoints.up("md")]: {
			width: "40%"
		},
		borderRadius: "15px",
		margin: "auto",
		height: "525px",
		border: "solid",
		borderWidth: "1.5px",
		borderColor: theme.palette.background.default,
		boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
	},
	containerHomepage: {
		[theme.breakpoints.down("sm")]: {
			width: "90%"
		},
		[theme.breakpoints.up("md")]: {
			width: "40%"
		},
		borderRadius: "15px",
		margin: "auto",
		border: "solid",
		borderWidth: "1.5px",
		borderColor: theme.palette.background.default,
		boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
		marginBottom: "50px"
	},
	signupButton: {
		marginTop: "20px",
		height: "48px",
		width: "100%",
		marginBottom: "30px"
	},
	content: {
		display: "flex",
		width: "80%",
		left: "10%",
		marginTop: "15px"
	},
	title: {
		textAlign: "center",
		marginBottom: "20px",
		marginTop: "20px"
	},
	field: {
		marginBottom: "28px"
	},
	finishButton: {
		width: "100%",
		height: "3em",
		padding: "10px"
	},
	endIcon: {
		marginLeft: "10px"
	},
	errorMessageContainer: {
		color: theme.palette.others.error,
		display: "inline-flex",
		marginLeft: "-15px"
	},
	errorMessageText: {
		fontSize: "12px",
		lineHeight: "18px",
		marginLeft: "0.5rem",
		display: "flex",
		height: "2em",
		alignItems: "center"
	},
	successMessageContainer: {
		color: theme.palette.others.success,
		marginTop: "5px"
	},

	//Success pg elements
	successMessage: {
		textAlign: "center"
	},
	catGif: {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: "30px",
		marginTop: "35px",
		width: "200px",
		borderRadius: "10px"
	},
	homeButton: {
		backgroundColor: theme.palette.others.error,
		color: "white",
		marginTop: "15px",
		width: "100%",
		height: "3em",
		padding: "10px",
		"&:hover": {
			//you want this to be the same as the backgroundColor above
			backgroundColor: theme.palette.others.error
		}
	},
	errorMessage: {
		color: theme.palette.others.error,
		textAlign: "center"
	},
	anchor: {
		textDecoration: "none"
	},
	socialIcon: {
		width: "64px",
		height: "64px",
		[theme.breakpoints.down("sm")]: {
			width: "48px",
			height: "48px"
		}
	}
}));
