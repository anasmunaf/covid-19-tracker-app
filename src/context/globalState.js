/** @format */

import React, { createContext, useEffect, useState } from "react";
import { cardsApi, chartApi, countryApi } from "../api/api";
export const GlobalContext = createContext(0);

function cardsData(global) {
  let cases, death, recover;
  cases = global.map((arr) => arr.cases);
  death = global.map((arr) => arr.deaths);
  recover = global.map((arr) => arr.recovered);
  cases = cases.reduce((prev, cur) => prev + cur, 0);
  death = death.reduce((prev, cur) => prev + cur, 0);
  recover = recover.reduce((prev, cur) => prev + cur, 0);
  return {
    name: "global",
    cases,
    death,
    recover,
  };
}

export const GlobalProvider = ({ children }) => {
  let [global, setGlobal] = useState([]);
  let [graph, setGraph] = useState([]);
  let [countryData, setCountryData] = useState(0);

  function selectCountry(country) {
    if (country !== "Global")
      countryApi(country).then(async (arr) => await setCountryData(arr));
    else setCountryData("Global");
  }

  useEffect(() => {
    cardsApi().then(async (cards) => await setGlobal(cards));
    chartApi().then(async (arr) => await setGraph(arr));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        review:
          countryData && countryData !== "Global"
            ? {
                name: countryData,
                cases: countryData.cases,
                death: countryData.deaths,
                recover: countryData.recovered,
              }
            : cardsData(global),
        graph,
        selectCountry,
        countries: global.map((arr) => arr.countries).flat(Infinity),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
