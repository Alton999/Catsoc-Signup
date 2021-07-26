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
        borderRadius: '10px',
        borderStyle: 'solid',
        borderColor: '#a99dc4',
        borderWidth: '1px'
    },

    content: {
        display: 'flex',
        width: '80%',
        left: '10%',
        marginTop: '10px',
    },

    //Form pg elements
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
    },

    //Success pg elements
    successMessage: {
        textAlign: 'center',
    },

    catGif: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '30px',
        marginTop: '35px',
        width: '200px',
        borderRadius: '10px',
    }
}))