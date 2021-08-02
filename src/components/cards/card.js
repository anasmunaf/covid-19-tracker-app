/** @format */

import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import CardComponent from "./cardComponent";
import { Grid } from "@material-ui/core";
import Circle from "react-circle";

const Cards = () => {
  let { review } = useContext(GlobalContext);
  return (
    <div>
      <Grid container>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'
          item
          sm={4}
        >
          <CardComponent
            image={
              "https://pink.pharmaintelligence.informa.com/-/media/editorial/pink-sheet/2020/11/ps2011_coronalife_1682770195_1200.jpg?rev=ff13d1311efd4fb6bce1139b4100c887"
            }
            name={"Cases"}
            value={review.cases}
            color='#4fc3f7'
          />
        </Grid>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'
          item
          sm={4}
        >
          <CardComponent
            image={
              "https://www.apa.org/images/death-title-image_tcm7-187855.jpg"
            }
            name={"Deaths"}
            value={review.death}
            color='#e57373'
          />
        </Grid>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'
          item
          sm={4}
        >
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
    </div>
  );
};

export default Cards;
