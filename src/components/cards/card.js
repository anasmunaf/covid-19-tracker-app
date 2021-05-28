/** @format */

import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import CardComponent from "./cardComponent";
import { Grid } from "@material-ui/core";

const Cards = () => {
  let { review } = useContext(GlobalContext);
  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <CardComponent
            name={"Cases"}
            value={review.cases}
            text={"active"}
            color='#80deea'
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            name={"Deaths"}
            value={review.death}
            text={"deaths"}
            color='#ef9a9a'
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            name={"Recovered"}
            value={review.recover}
            text={"recovered"}
            color='#a5d6a7'
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
