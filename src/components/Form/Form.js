import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
//Components
import TextInput from "./FormFields/TextInput";
import FinishButton from "./FormFields/FinishButton";
import { CardContent } from "@material-ui/core";
//Styles
import useStyles from './styles';


const Form = () => {
    const classes = useStyles()

    return (
        <>
            <Card className={classes.container} variant="outlined">
				<CardContent>
					<FormControl>
						<Typography className={classes.title} variant="h5" gutterBottom>
							Sign Up Below!
						</Typography>
						<TextInput
                            className={classes.field}
							text="Full Name"
						></TextInput>
						<TextInput
                            className={classes.field}
							text="Email"
						></TextInput>
						<TextInput
                            className={classes.field}
							text="USU Number"
						></TextInput>
						<FinishButton className={classes.button}></FinishButton>
					</FormControl>
				</CardContent>	
			</Card>
        </>
    );
}

export default Form

