import { DeleteOutline } from "@mui/icons-material";
import { Alert, Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { useState } from "react";
import { deleteStudents, editStudents, getStudents } from "../Helpers/ApiHelpers";
import studentResponse from "../Models/student";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstname", headerName: "First Name", width: 150 },
  { field: "surname", headerName: "Surname", width: 150 },
  { field: "dob", headerName: "Date of Birth", width: 150 },
  {
    field: "gender",
    headerName: "Gender",
    width: 120,
  },
  {
    field: "email",
    headerName: "Email",
    width: 180,
    editable: true,
  },
  {
    field: "mobile",
    headerName: "Mobile",
    width: 150,
    editable: true,
  },
];

interface studentTableProps {
  students: studentResponse[];
  setStudents: React.Dispatch<React.SetStateAction<studentResponse[]>>;
}

const createRow = (row: studentResponse) => {
  return {
    id: row.id,
    firstname: row.firstname,
    surname: row.surname,
    dob: row.dob,
    email: row.email,
    mobile: row.mobile,
    gender: row.gender,
  };
};

const StudentTable = ({ students, setStudents }: studentTableProps) => {
  const rows = students.map((student) => createRow(student));
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <Box>
      <Button variant="outlined" sx={{ mb: 3 }} onClick={() => getStudents(setStudents)}>
        Refresh Data
      </Button>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        autoHeight
        onCellEditCommit={(params: GridCellEditCommitParams) => editStudents(params)}
        onSelectionModelChange={(selectionModel: GridSelectionModel) => {
          setSelected(selectionModel as number[]);
        }}
      />
      {selected.length > 0 && (
        <Tooltip
          title={<Typography variant="subtitle2">Delete Selected Items</Typography>}
          sx={{ float: "right", mt: 1 }}
        >
          <IconButton
            onClick={async () => {
              await deleteStudents(selected.join(","));
              setSelected([]);
              await getStudents(setStudents);
            }}
          >
            <DeleteOutline color="error" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export default StudentTable;
