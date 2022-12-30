import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
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
        sx={{ mb: 4 }}
      />
      <Box>
        <Tooltip title={<Typography variant="subtitle2">Refresh Table Data</Typography>}>
          <Button
            variant="outlined"
            onClick={() => getStudents(setStudents, true)}
            startIcon={<RefreshIcon />}
          >
            Refresh
          </Button>
        </Tooltip>
        {selected.length > 0 && (
          <Tooltip
            title={<Typography variant="subtitle2">Delete Selected Items</Typography>}
            sx={{ float: "right" }}
            arrow
          >
            <Button
              onClick={async () => {
                await deleteStudents(selected.join(","));
                setSelected([]);
                await getStudents(setStudents);
              }}
              startIcon={<DeleteIcon />}
              variant="outlined"
              color="error"
            >
              Delete
            </Button>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};

export default StudentTable;
