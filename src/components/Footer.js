import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    gridRowStart: 2,
    gridRowEnd: 3,
    textAlign: "center",
    color: "white",
    paddingBottom: "2%",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" className={classes.footer} gutterBottom>
        Copyright &copy; Franklin Jara
      </Typography>
    </>
  );
};

export default Footer;
