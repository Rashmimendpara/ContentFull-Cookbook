
import { NavLink } from 'react-router-dom';
import { AppBar, Typography, Toolbar, CssBaseline } from '@mui/material';
import { Styles } from './Styles';
/*import DinnerDiningIcon from '@mui/icons-material/DinnerDining';*/
import LogoImage from "../assets/Logo.png";

const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={Styles.navbar}>
        <img src={LogoImage} alt="Logo" style={Styles.logo} />
        <Typography variant="h6" style={Styles.titlelogo}></Typography>
          <div>
            <NavLink to="/" style={Styles.navLink}>
              Home
            </NavLink>
            <NavLink to="/About" style={Styles.navLink}>
              About
            </NavLink>
            <NavLink to="/Contact" style={Styles.navLink}>
              Contact
            </NavLink>
            <NavLink to="/Recipes" style={Styles.navLink}>
              Recipes
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;