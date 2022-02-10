import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'; 
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    component: {
        background:'#6a6f8c',
        color: 'white'
    },
    container: {
        justifyContent: 'center',
        '&  >*': {
            padding: 20,
            color: 'white',
            textDecoration: 'none'
        }
    }
})

const Header = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
               <Link className={classes.link} to='/'><Typography>Home</Typography></Link>
               <Typography>Article</Typography>
               <Typography>Logout</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;