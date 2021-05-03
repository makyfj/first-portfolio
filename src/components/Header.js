import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";

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
    color: `white`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
});

const navLinks = [
  { title: `About me`, path: `/about-me` },
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
            <Home fontSize="large" />
          </IconButton>

          <List
            component="nav"
            aria-label="main navigation"
            className={navbarStyle.navbarDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <Link to={path} key={title} className={navbarStyle.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
