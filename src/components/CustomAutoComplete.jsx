/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Autocomplete, Chip, TextField } from "@mui/material";
import { useGridApiContext, useGridApiRef } from "@mui/x-data-grid-pro";
import React, { useCallback, useState } from "react";

const CustomAutoComplete = ({ row, id, value, field, params }) => {
  const [controlledValue, setControlledValue] = useState(value);
  const apiRef = useGridApiContext();
  const [open, setOpen] = useState(true);
  const options = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
  ];

  const handleRef = useCallback((element) => {
    if (element) {
      const input = element.querySelector("input");
      return input?.focus();
    }
  });
  return (
    <Autocomplete
      multiple
      fullWidth
      openOnFocus
      freeSolo
      ref={handleRef}
      options={options}
      disableCloseOnSelect
      disableClearable
      getOptionLabel={(option) => option.name}
      value={controlledValue}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField {...params} id="input-1" placeholder="Add value" />
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
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(event, value, reason, details) => {
        setControlledValue(value);
      }}
      onBlur={(event) => {
        apiRef.current.setEditCellValue({ id, field, value: controlledValue });
      }}
    />
  );
};

export default CustomAutoComplete;
