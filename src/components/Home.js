import ProfilePic from "../static/images/profile.jpg";
import { makeStyles, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
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
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Avatar
          alt="Franklin Jara"
          src={ProfilePic}
          className={classes.large}
        />
      </div>
    </>
  );
};

export default Home;
