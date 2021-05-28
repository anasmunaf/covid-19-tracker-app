/** @format */

import axios from "axios";

export const cardsApi = async () => {
  try {
    let result = await axios.get(
      "https://corona.lmao.ninja/v2/continents?yesterday=true&sort",
    );
    return result.data;
  } catch (error) {
    return error;
  }
};
export const chartApi = async () => {
  try {
    let result = await axios.get("https://corona.lmao.ninja/v2/historical/all");
    return result.data;
  } catch (error) {
    return error;
  }
};
export const countryApi = async (country) => {
  try {
    let url =
      "https://corona.lmao.ninja/v2/countries/:query?yesterday=true&strict=true&query";
    if (country.length) {
      url = `https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`;
    }
    let result = await axios.get(url);
    return result.data;
  } catch (error) {
    return error;
  }
};
