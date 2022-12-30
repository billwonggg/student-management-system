import { GridCellEditCommitParams } from "@mui/x-data-grid";
import axios from "axios";
import React from "react";
import studentResponse from "../Models/student";

export const getStudents = async (
  setStudents: React.Dispatch<React.SetStateAction<studentResponse[]>>
) => {
  const endpoint = "/api/v1/student";
  try {
    const response = await axios.get<studentResponse[]>(endpoint);
    setStudents(response.data);
  } catch (err) {
    console.error(err);
  }
};

export const editStudents = async (params: GridCellEditCommitParams) => {
  const endpoint = `/api/v1/student/${params.id}?${params.field}=${params.value}`;
  await axios.put(endpoint);
};

export const deleteStudents = async (students: string) => {
  const endpoint = `/api/v1/student/${students}`;
  await axios.delete(endpoint);
};
