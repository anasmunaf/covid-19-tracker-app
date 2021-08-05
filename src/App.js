/** @format */

import { Grid } from "@material-ui/core";
import "./App.css";
import Cards from "./components/cards/card";
import Chart from "./components/charts/chart";
import Countries from "./components/countries/counrties";
import Header from "./components/header";
import { GlobalProvider } from "./context/globalState";
import Container from "@material-ui/core/Container";
function App() {
  return (
    <GlobalProvider>
      <div>
        <Grid container direction='column'>
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <Countries />
          </Grid>
          <Grid item>
            <Cards />
          </Grid>
          <Grid item>
            <Chart />
          </Grid>
        </Grid>
      </div>
    </GlobalProvider>
  );
}

export default App;
