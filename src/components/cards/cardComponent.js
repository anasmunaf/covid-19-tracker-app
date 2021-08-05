/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import NumberFormat from "react-number-format";

const useStyles = makeStyles({
  root: (cardColor) => ({
    backgroundColor: "white",
    boxShadow: `2px 2px 2px 2px grey`,
    // width: "500px",
  }),
  title: (cardColor) => ({
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#607d8b",
    textAlign: "center",
  }),
  date: {
    fontWeight: "light",
    fontSize: "1rem",
    color: "#607d8b",
    textAlign: "center",
  },
  name: (cardColor) => ({
    fontWeight: "bold",
    color: cardColor.color,
    minHeight: 32,
  }),
  media: {
    height: 200,
    // // maxHeight: 200,
    // minHeight: 120,
  },
});
const CardComponent = (props) => {
  let cardColor = { color: props.color };
  const classes = useStyles(cardColor);
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography
              className={classes.name}
              gutterBottom
              variant='h5'
              component='h2'
            >
              {props.name}
            </Typography>
            <Typography className={classes.date} color='textSecondary'>
              {new Date().toDateString()}
            </Typography>
            <Typography className={classes.title} color='textPrimary'>
              <NumberFormat
                value={props.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardComponent;
