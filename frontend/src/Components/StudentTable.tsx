import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import studentResponse from "../Models/student";

interface Data {
  firstname: string;
  surname: string;
  dob: Date;
  gender: string;
  email: string;
  mobile: string;
}

interface studentTableProps {
  students: studentResponse[];
}

const StudentTable = ({ students }: studentTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, i) => {
            return (
              <TableRow key={i}>
                <TableCell>{student.firstname}</TableCell>
                <TableCell>{student.surname}</TableCell>
                <TableCell>{new String(student.dob)}</TableCell>
                <TableCell>{student.gender}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.mobile}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
