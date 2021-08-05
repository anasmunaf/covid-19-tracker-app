/** @format */

import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  header: {
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontFamily: "Limelight",
    color: "#e91e63",
    fontSize: "8vh",
    display: "inline-block",
  },
  subhead: {
    fontFamily: "cursive",
    color: "#006064",
    display: "inline-block",
    fontSize: "4vh",
  },
});

const Header = () => {
  const classes = styles();
  return (
    <Container className={classes.header} maxWidth='xl'>
      <Typography className={classes.title}>COVID-19</Typography>
      <Typography className={classes.subhead}>
        Data Research Alliance
      </Typography>
    </Container>
  );
};
export default Header;
