import { Box } from "@mui/material";
import { DataGrid, GridCellEditCommitParams, GridColDef } from "@mui/x-data-grid";
import { editStudents } from "../Helpers/ApiHelpers";
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

const StudentTable = ({ students }: studentTableProps) => {
  const rows = students.map((student) => createRow(student));

  return (
    <Box sx={{ height: "500px", width: "80%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onCellEditCommit={(params: GridCellEditCommitParams) => editStudents(params)}
      />
    </Box>
  );
};

export default StudentTable;
