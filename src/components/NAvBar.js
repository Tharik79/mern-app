 import { AppBar, Toolbar } from '@mui/material';
 import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

// makeStyles used here after installing npm makeStyles to do custom styling.
const useStyles = makeStyles({
    header:{
    background: 'linear-gradient(45deg, #0E0454 30%, #8A0C86 90%)'
    },
    tabs: {
        color: '#FFFFFF',
        TextDecoration: 'none',
        marginRight:20,
        fontsize: 20

    }
})
const NavBar = () => {

    const classes = useStyles();
    return(
    <div>
        <AppBar className={classes.header} position='sticky'>
            <Toolbar>
                <NavLink className={classes.tabs}  to='./' exact>Home</NavLink>
                <NavLink className={classes.tabs}  to='allusers' exact>AllUsers</NavLink>
                <NavLink  className={classes.tabs}  to='adduser' exact>AddUSer</NavLink>
                
            </Toolbar>
        </AppBar>
    
    </div>
    );
}
export default NavBar;
