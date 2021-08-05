/** @format */

import React, { useContext } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import styles from "./chart.module.css";
import { GlobalContext } from "../../context/globalState";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Chart = () => {
  let { graph, review } = useContext(GlobalContext);
  if (graph.length === 0) return null;
  const lineData = {
    labels: Object.keys(graph.cases),
    datasets: [
      {
        label: "Cases",
        data: Object.values(graph.cases),
        borderColor: ["rgba(52, 168, 235)"],
        borderWidth: 1,
      },
      {
        label: "Death",
        data: Object.values(graph.deaths),
        borderColor: ["rgba(235, 52, 76)"],
        borderWidth: 1,
      },
      {
        label: "Recover",
        data: Object.values(graph.recovered),
        borderColor: ["rgba(39, 242, 39)"],
        borderWidth: 1,
      },
    ],
  };
  const barData = {
    labels: ["Cases", "Death", "Recovered"],
    datasets: [
      {
        label: "Cases",
        data: [review.cases, review.death, review.recover],
        borderColor: [
          "rgba(52, 168, 235)",
          "rgba(235, 52, 76)",
          "rgba(39, 242, 39)",
        ],
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className={styles.chart}>
      <Typography variant='h4' gutterBottom>
        Graphical Representation
      </Typography>
      <Box borderTop={0} borderColor='#607d8b'>
        {review.name === "global" ? (
          <Line data={lineData} width={80} height={50} />
        ) : (
          <Bar data={barData} />
        )}
      </Box>
    </div>
  );
};

export default Chart;
