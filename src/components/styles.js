import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
			width: "90%"
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
	content: {
		display: "flex",
		width: "80%",
		left: "10%",
		marginTop: "15px"
	},
	title: {
		textAlign: "center",
		padding: "20px"
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
	}
}));
