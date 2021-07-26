import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
//Assets
import picture from '../../assets/background.gif';
import logo from '../../assets/CatsocLogo-02.png';
//Styles
import useStyles from '../styles';

const Success = () => {
    const classes = useStyles()

    return (
        <>
			<img className={classes.logo} src={logo} alt="Catsoc Logo"/>
            <Card className={classes.container} variant="outlined">
                <img className={classes.catGif} src={picture} alt="Cat gif"/>
					<FormControl className={classes.content}>
						<Typography className={classes.successMessage} variant="h5">
							Thank you for joining CatSoc!
						</Typography>
                        <Typography className={classes.title} variant="subtitle1" gutterBottom>
                            Extra stuff and payment text goes here :3
                        </Typography>
					</FormControl>
			</Card>
        </>
    );
}

export default Success