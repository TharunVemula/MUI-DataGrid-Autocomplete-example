/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Autocomplete, Chip, TextField } from "@mui/material";
import React, { useState } from "react";

const CustomAutoComplete = ({ row, field, params }) => {
  const [controlledValue, setControlledValue] = useState();
  const options = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
  ];
  return (
    <Autocomplete
      multiple
      fullWidth
      options={options}
      getOptionLabel={(option) => option.name}
      value={controlledValue}
      renderInput={(params) => (
        <TextField
          {...params}
          label="filterSelectedOptions"
          placeholder="Favorites"
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            variant="outlined"
            label={option.name}
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
};

export default CustomAutoComplete;
