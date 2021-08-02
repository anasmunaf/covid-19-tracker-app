/** @format */

import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  head: {
    backgroundColor: "#f5f5f5",
    fontFamily: "Limelight",
    fontSize: "5rem",
    color: "#e91e63",
    paddingLeft: "3%",
    height: "100px",
  },
  subhead: {
    fontFamily: "cursive",
    color: "#006064",
    fontSize: "2.7rem",
  },
  // logo: { margin: "auto 30px" },
});

const Header = () => {
  const classes = styles();
  return (
    <div>
      <Typography className={classes.head} gutterBottom>
        COVID-19
        <span className={classes.subhead}> Data Research Alliance</span>
        {/* <Typography variant={"h3"} className={classes.subhead} gutterBottom>
          Data Research Alliance
        </Typography> */}
        {/* <img
          width='56'
          height='56'
          className={classes.logo}
          src='https://image.flaticon.com/icons/png/512/2659/2659980.png'
        /> */}
      </Typography>
    </div>
  );
};
export default Header;
