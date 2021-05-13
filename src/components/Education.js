import { Box, makeStyles, Typography, Container } from "@material-ui/core";
import Footer from "./Footer";
import education from "../education";
import { Row, Col } from "react-bootstrap";

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

const Education = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.mainRoot} maxWidth={false}>
        <Container className={classes.root}>
          <Typography variant="h1" gutterBottom>
            <Row>
              {education.map((edu) => (
                <Col sm={12} key={edu._id}>
                  <p>{edu.name}</p>
                </Col>
              ))}
            </Row>
          </Typography>
          <Footer />
        </Container>
      </Container>
    </>
  );
};

export default Education;
