/** @format */

import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "1% 42%",
    minWidth: 250,
  },
}));

const Countries = () => {
  let { selectCountry, countries } = useContext(GlobalContext);
  const classes = useStyles();

  let handleChange = (e) => {
    if (e) selectCountry(e);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Countries</InputLabel>
        <NativeSelect onChange={(e) => handleChange(e.target.value)}>
          <option value={"Global"}>Global</option>
          {countries.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Countries;
