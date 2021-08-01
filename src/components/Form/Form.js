// React imports
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Material UI imports
import { Typography, FormControl, Card, Button } from "@material-ui/core";

//Assets
import logo from "../../assets/CatsocLogo-02.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Custom Components
import TextInput from "./FormFields/TextInput";
import FinishButton from "./FormFields/FinishButton";
import SuccessCard from "../FormPages/SuccessCard";
import ErrorCard from "../FormPages/ErrorCard";
import Loader from "../Loader";

//Styles
import useStyles from "../styles";

const Form = () => {
	const classes = useStyles();
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		USU: ""
	});
	const [initialState, setInitialState] = useState({
		firstName: false,
		lastName: false,
		email: false,
		USU: false
	});
	const [validEmail, setEmailValidity] = useState(false);
	const [validUsu, setUsuValidity] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const [currentStage, setCurrentStage] = useState(0);
	// Deconstructing
	const { firstName, lastName, email, USU } = data;

	const handleChange = (e) => {
		if (e.target.name === "firstName" || e.target.name === "lastName") {
			setData({
				...data,
				[e.target.name]:
					e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
			});
		} else {
			setData({
				...data,
				[e.target.name]: e.target.value
			});
		}
		setInitialState({
			...initialState,
			[e.target.name]: true
		});
	};

	const emailChecker = (email) => {
		const emailRe =
			/^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (initialState.email === true && email !== "") {
			if (emailRe.test(String(email).toLowerCase())) {
				setEmailValidity(false);
			} else {
				setEmailValidity(true);
			}
		}
	};

	const UsuChecker = (USU) => {
		const UsuRe = /^\d+$/;
		if (initialState.USU === true && USU !== "") {
			if (UsuRe.test(String(USU)) && USU.length === 7) {
				setUsuValidity(false);
			} else {
				setUsuValidity(true);
			}
		}
	};
	const checkAllValid = () => {
		if (validEmail || validUsu || !firstName || !lastName || !email || !USU) {
			return true;
		} else {
			return false;
		}
	};
	const handleHomeButton = () => {
		setCurrentStage(0);
	};

	useEffect(() => {
		emailChecker(email);
		UsuChecker(USU);
		checkAllValid();
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await fetch(
				"https://v1.nocodeapi.com/altonong/google_sheets/jPwQXXkuEKFpjQmz?tabId=Sheet1",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify([
						[USU, firstName, lastName, email, new Date().toLocaleString()]
					])
				}
			);
			await response.json();
			setData({ ...data, firstName: "", lastName: "", email: "", USU: "" });
			console.log("Submittted");
			setLoading(false);
			setCurrentStage(1);
		} catch (err) {
			console.log(err);
			setCurrentStage(2);
		}
	};
	return (
		<>
			<img className={classes.logo} src={logo} alt="Catsoc Logo" />
			<form onSubmit={handleSubmit}>
				<Card className={classes.container} variant="outlined">
					{currentStage === 0 && (
						<FormControl className={classes.content}>
							<Button component={Link} to="/" className={classes.back}>
								<ArrowBackIosIcon />
							</Button>
							<Typography className={classes.title} variant="h5" gutterBottom>
								Sign Up Below!
							</Typography>
							<TextInput
								label="First Name"
								name="firstName"
								value={firstName}
								type="text"
								onChange={handleChange}
							/>
							<TextInput
								label="Last Name"
								name="lastName"
								value={lastName}
								type="text"
								onChange={handleChange}
							/>
							<TextInput
								label="Email"
								name="email"
								value={email}
								type="email"
								onChange={handleChange}
								error={validEmail}
							/>
							<TextInput
								label="USU Number"
								name="USU"
								value={USU}
								type="tel"
								onChange={handleChange}
								error={validUsu}
							/>
							<FinishButton type="submit" disabled={checkAllValid()}>
								Finish
							</FinishButton>
							{isLoading ? <Loader /> : null}
						</FormControl>
					)}
					{currentStage === 1 && <SuccessCard />}
					{currentStage === 2 && (
						<ErrorCard handleHomeButton={handleHomeButton} />
					)}
				</Card>
			</form>
		</>
	);
};

export default Form;
