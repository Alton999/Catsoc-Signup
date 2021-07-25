import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    logo: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '30px',
        marginTop: '30px',
        width: '200px',
    },

    container: {
        width: '50%',
        height: '525px',
        margin: 'auto',
    },

    content: {
        display: 'flex',
        width: '80%',
        left: '10%',
        marginTop: '10px',
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