/** @format */

import "./App.css";
import Cards from "./components/cards/card";
import Chart from "./components/charts/chart";
import Countries from "./components/countries/counrties";
import { GlobalProvider } from "./context/globalState";
function App() {
  return (
    <GlobalProvider>
      <div>
        <Cards />
        <Countries />
        <Chart />
      </div>
    </GlobalProvider>
  );
}

export default App;
