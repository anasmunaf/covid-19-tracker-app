/** @format */

import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "80%",
    alignItems: "center",
    marginBottom: "10%",
  },
  label: {
    textAlign: "center",
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
      <FormControl variant='outlined' fullWidth className={classes.formControl}>
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
