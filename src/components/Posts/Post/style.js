
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ({
    media: {
        height: 0,
        paddingTop: '80%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard:{
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '10px',
        height: '80% !important',
        position: 'relative',
        width:'95%',
        backgroundColor:'#e9eef5',
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'space-between', 
        width: '100%',
        position: 'absolute',
    },
    overlay: {
        paddingTop: '10px',
        paddingLeft: '15px',
        color: 'white',
    },
    overlay2: {
        color: 'white',
        paddingTop: '10px'
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px',
        marginBottom: '0px',
        color: 'purple',
        fontWeight: 'bold',
    },
    title: {
        padding: '10px 10px',
        paddingTop:'0px',
    },
    messages: {
        left: '0px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    }
});
