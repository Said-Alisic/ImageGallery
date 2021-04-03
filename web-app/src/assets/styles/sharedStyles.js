import { makeStyles } from '@material-ui/core/styles';

export const appStyles = makeStyles((theme) => ({
    app: {
        backgroundSize: 'cover',
        background: 'linear-gradient(to right, #45b3e0 3%, #5bbce4 8%, #71c5e7 15%, #87ceeb 25%, #9dd7ef 40%, #b3e0f2 65%, #c9e9f6 80%)',
    },
}));

export const navBarStyles = makeStyles((theme) => ({
    navBar: {
        boxShadow: 5,
        background: 'linear-gradient(to bottom left, #45b3e0 15%, #5bbce4 25%, #71c5e7 35%, #87ceeb 50%, #9dd7ef 65%, #b3e0f2 80%, #c9e9f6 100%)',
        position: 'sticky', 
    },
    btn: {
        color: '#5a20c4',
        textDecoration: 'underline',
        textDecorationThickness: '20%',
    },   
    titleBtn: {
        color: '#5a20c4',
        fontSize: 'x-large',
        marginRight: 'auto',
        fontStyle: 'italic',
    },
    btnFont: {
        fontWeight: 'bold',
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
    },
}));

export const containerStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh', 
        background: 'rgba(192, 192, 192, 0.0)',
        backgroundPosition: 'center',
        maxWidth: 'lg',
    },   
}));

export const textStyles = makeStyles((theme) => ({
    mainText: {
        textAlign: 'center',
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
    },
    infoText: {
        textAlign: 'center',
        marginBottom: '5%',
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
    },
}));

export const imageStyles = makeStyles((theme) => ({
    imgGrid: {
        flexGrow: 1,
        marginTop: theme.spacing(2),
    },    
    img: {
        margin: 'auto',
        display: 'flex',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '5%',
        boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        transitionDuration: 375, 
        '&:hover': {
            opacity: '0.9',    
            transform: 'scale(1.05, 1.05)',
            position: 'relative'
        },
    },
    imgCard: {
        boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        background: 'linear-gradient(to bottom right,  #45b3e0 15%, #5bbce4 25%, #71c5e7 35%, #87ceeb 40%, #9dd7ef 50%, #b3e0f2 60%, #c9e9f6 70%,#9dd7ef 80%, #87ceeb 85%, #71c5e7 90%,#5bbce4 95%,#45b3e0 100%)',                          
    },
    cardBtn: {
        width: '220px',
        color: 'white',
        textTransform: 'none',
        background: 'linear-gradient(45deg, #260D56 15%, #5a20c4 35%, #30106B 45%, #7A66A1 60%, #594089 70%, #9585B4 100% )', 
    },
    cardContent: {
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
    },
    cardHeader: {
        fontStyle: 'oblique',
        color: '#30106B',
    },
    cardBtnIcon: {
        marginLeft: 'auto',
    },
    cardBtnText: {
        marginRight: 'auto',
    },
}));    

export const searchBarStyles = makeStyles((theme) => ({
    searchBar: {
        marginBottom: '6.5%',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        width: '50%',
    },
    subBtn: {
        textTransform: 'none',
    },
    input: {
        textTransform: 'none',
    },
}));

