/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: (cardColor) => ({
    textAlign: "center",
    margin: "4% 8%",
    backgroundColor: cardColor.backgroundColor,
  }),
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "1.2vw",
    "@media (max-width:800px)": {
      fontSize: "2vw",
    },
    textAlign: "center",
  },
});
const CardComponent = (props) => {
  let cardColor = { backgroundColor: props.color };
  const classes = useStyles(cardColor);
  //   const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {props.name}
          </Typography>
          <Typography
            className={classes.title}
            color='textPrimary'
            gutterBottom
          >
            {props.value}
          </Typography>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {new Date().toDateString()}
          </Typography>
          <Typography
            className={classes.title}
            color='textPrimary'
            gutterBottom
          >
            Number of {props.text} of covid-19
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardComponent;
