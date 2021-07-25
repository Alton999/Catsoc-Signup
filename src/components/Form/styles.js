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
		width: "50%",
		height: "550px",
		margin: "auto"
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
		width: "20%",
		marginLeft: "auto",
		padding: "10px"
	},
	errorMessageContainer: {
		color: "#e11616",
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
		color: "#4BB543",
		marginTop: "5px"
	}
}));
