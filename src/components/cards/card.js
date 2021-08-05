/** @format */

import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import CardComponent from "./cardComponent";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Circle from "react-circle";
const useStyles = makeStyles({
  card: {
    // marginRight: "100px",
  },
});
const Cards = () => {
  let { review } = useContext(GlobalContext);
  const styles = useStyles();
  return (
    <Container maxWidth='xl'>
      <Grid container direction='row' spacing={5}>
        <Grid item md={4} xs={12} className={styles.card}>
          <CardComponent
            image={
              "https://pink.pharmaintelligence.informa.com/-/media/editorial/pink-sheet/2020/11/ps2011_coronalife_1682770195_1200.jpg?rev=ff13d1311efd4fb6bce1139b4100c887"
            }
            name={"Cases"}
            value={review.cases}
            color='#4fc3f7'
          />
        </Grid>
        <Grid item md={4} xs={12} className={styles.card}>
          <CardComponent
            image={
              "https://www.apa.org/images/death-title-image_tcm7-187855.jpg"
            }
            name={"Deaths"}
            value={review.death}
            color='#e57373'
          />
        </Grid>
        <Grid item md={4} xs={12} className={styles.card}>
          <CardComponent
            image={
              "https://www.cbs42.com/wp-content/uploads/sites/81/2020/05/16x9-web-story-content_New-Normal_No-logo.png?strip=1"
            }
            name={"Recovered"}
            value={review.recover}
            color='#81c784'
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;
