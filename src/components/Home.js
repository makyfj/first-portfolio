import ProfilePic from "../static/images/profile.jpg";
import {
  Box,
  makeStyles,
  Avatar,
  Typography,
  Container,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  mainRoot: {
    backgroundColor: `#3f51b5`,
    boxShadow: `0.1px 50px`,
    height: `100%`,
    width: `100%`,
  },
  root: {
    width: "100%",
    maxWidth: 500,
  },
  body: {
    textAlign: "center",
  },
  rootAvatar: {
    display: "flex",
    "& > *": {
      margin: "0 auto",
    },
  },
  large: {
    marginTop: 10,
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  white: {
    color: "white",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.mainRoot} maxWidth="xlg">
        <Container className={classes.rootAvatar}>
          <Avatar
            alt="Franklin Jara"
            src={ProfilePic}
            className={classes.large}
          />
        </Container>
        <Container className={classes.root}>
          <Typography variant="h1" gutterBottom>
            Hello there
          </Typography>
        </Container>
        <Container className={classes.body}>
          <Typography variant="h1" gutterBottom className={classes.white}>
            My name is Franklin Jara :)
          </Typography>
          <Typography variant="h4" gutterBottom>
            <Box textAlign="center" m={5}>
              I built this website with React and Material-UI.
            </Box>
            <Box textAlign="center" m={5}>
              I recently graduate from Farmingdale State College with a BS in
              Computer Programing and Information Systems.
            </Box>
            <Box textAlign="center" m={5}>
              I'll be continue studying to pursue my master in Computer Science
              at Adelphi University.
            </Box>
            <Box textAlign="center" m={5}>
              I love to code and I love Linux OS, I use Arch Linux.
            </Box>
            <Box textAlign="center" m={5}>
              My other hobby is to workout, I probably spend too much time
              working out as well :)
            </Box>
            <Box textAlign="center" m={5}>
              The code for this website is located in my github :){" "}
              <a href="https://www.github.com/makyfj/portfolio">
                <GitHubIcon />
              </a>
            </Box>
          </Typography>
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
