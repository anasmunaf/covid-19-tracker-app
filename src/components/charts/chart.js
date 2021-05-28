/** @format */

import React, { useContext } from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.module.css";
import { GlobalContext } from "../../context/globalState";

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
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };
  return (
    <div className={styles.chart}>
      {review.name === "global" ? (
        <Line data={lineData} />
      ) : (
        <Bar data={barData} />
      )}
    </div>
  );
};

export default Chart;
