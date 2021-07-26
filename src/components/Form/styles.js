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
		height: "525px"
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
	button: {
		width: "100%",
		marginLeft: "auto",
		height: "3em",
		padding: "10px"
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
	}
}));
