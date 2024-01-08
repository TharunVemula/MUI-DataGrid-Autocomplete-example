import "./App.css";
import { DataGridPro } from "@mui/x-data-grid-pro";
import CustomAutoComplete from "./components/CustomAutoComplete";
import { Chip } from "@mui/material";

function App() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "options",
      headerName: "Option",
      renderEditCell: (params) => <CustomAutoComplete {...params} />,
      renderCell: (params) =>
        params.value.map((item, index) => {
          return <Chip key={index} variant="outlined" label={item.name} />;
        }),
      editable: true,
      flex: 1,
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      options: [{ id: 1, name: "Option 1" }],
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      options: [{ id: 1, name: "Option 1" }],
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      options: [{ id: 1, name: "Option 1" }],
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      options: [{ id: 1, name: "Option 1" }],
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      options: [{ id: 1, name: "Option 1" }],
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      options: [{ id: 1, name: "Option 1" }],
    },
  ];

  return (
    <>
      <DataGridPro
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        processRowUpdate={(changed, original) => {
          // TODO: need to call ap call to save data
          console.log(changed, original);
          return changed;
        }}
        onProcessRowUpdateError={(err) => {
          console.log(err);
        }}
      />
    </>
  );
}

export default App;
