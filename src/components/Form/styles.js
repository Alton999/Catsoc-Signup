import {makeStyles} from '@material-ui/core/styles';
import { Translate } from '@material-ui/icons';

export default makeStyles((theme)=>({
    container: {
        width: '50%',
        height: '550px',
        margin: 'auto',
    },

    content: {
        display: 'flex',
        width: '80%',
        left: '10%',
        marginTop: '15px',
    },

    title: {
        textAlign: 'center',
        padding: '20px',
    },

    field: {
        marginBottom: '28px',
    },

    button: {
        width: '100px',
        marginLeft: 'auto',
        padding: '10px',
    }
}))