import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
  Hidden,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// css style
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `lowercase`,
    color: `black`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
});

const navLinks = [
  { title: `Projects`, path: `/projects` },
  { title: `Education`, path: `/education` },
  { title: `Contact`, path: `/contact` },
];

const Header = () => {
  // Add styles
  const navbarStyle = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg" className={navbarStyle.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Link to="/">
              <Home fontSize="large" />
            </Link>
          </IconButton>

          <Hidden mdDown>
            <List
              component="nav"
              aria-label="main navigation"
              className={navbarStyle.navbarDisplayFlex}
            >
              <ListItem>
                <a href="https://github.com/makyfj">
                  <GitHubIcon />
                </a>
              </ListItem>
              <ListItem>
                <a href="https://linkedin.com/in/franklin-jara-fj">
                  <LinkedInIcon />
                </a>
              </ListItem>
              {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={navbarStyle.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} fontSize="large" />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
