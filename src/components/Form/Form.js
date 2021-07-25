import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
//Components
import TextInput from "./FormFields/TextInput";
import FinishButton from "./FormFields/FinishButton";
//Styles
import useStyles from './styles';


const Form = () => {
    const classes = useStyles()

    return (
        <>
            <Card className={classes.container} variant="outlined">
					<FormControl className={classes.content}>
						<Typography className={classes.title} variant="h5" gutterBottom>
							Sign Up Below!
						</Typography>
						<TextInput
							text="First Name"
						></TextInput>
						<TextInput
							text="Last Name"
						></TextInput>
						<TextInput
							text="Email"
						></TextInput>
						<TextInput
							text="USU Number"
						></TextInput>
						<FinishButton></FinishButton>
					</FormControl>
			</Card>
        </>
    );
}

export default Form

