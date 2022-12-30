import { GridCellEditCommitParams } from "@mui/x-data-grid";
import axios from "axios";
import React from "react";
import studentResponse from "../Models/student";
import { sendNotif } from "./Notification";

export const getStudents = async (
  setStudents: React.Dispatch<React.SetStateAction<studentResponse[]>>,
  showNotif: boolean = false
) => {
  const endpoint = "/api/v1/student";
  try {
    const response = await axios.get<studentResponse[]>(endpoint);
    setStudents(response.data);
    if (showNotif) sendNotif("Successfully refreshed data", "success");
  } catch (err) {
    console.error(err);
    if (showNotif) sendNotif("Error refreshing data", "error");
  }
};

export const editStudents = async (params: GridCellEditCommitParams) => {
  const endpoint = `/api/v1/student/${params.id}?${params.field}=${params.value}`;
  try {
    await axios.put(endpoint);
    sendNotif(`Successfully updated ${params.field}`, "success");
  } catch (err) {
    sendNotif(`Error updating ${params.field}`, "error");
  }
};

export const deleteStudents = async (students: string) => {
  const endpoint = `/api/v1/student/${students}`;
  try {
    await axios.delete(endpoint);
    sendNotif("Successfully deleted students", "success");
  } catch (err) {
    sendNotif("Error deleting students", "error");
  }
};
