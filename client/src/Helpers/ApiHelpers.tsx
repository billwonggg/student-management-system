import { GridCellEditCommitParams } from "@mui/x-data-grid";
import axios from "axios";
import React from "react";
import studentResponse from "../Models/student";
import { sendNotif } from "./Notification";

export const getStudents = async (
  setStudents: React.Dispatch<React.SetStateAction<studentResponse[]>>,
  showNotif: boolean = false
) => {
  const endpoint = "http://127.0.0.1:8080/api/v1/student";
  try {
    const response = await axios.get<studentResponse[]>(endpoint);
    setStudents(response.data);
    if (showNotif) sendNotif("Successfully refreshed data", "success");
  } catch (err) {
    console.error(err);
    if (showNotif) sendNotif("Error refreshing data", "error");
  }
};

export const addStudent = async (payload: any) => {
  const endpoint = "http://127.0.0.1:8080/api/v1/student";
  try {
    await axios.post(endpoint, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    sendNotif(`Successfully added student`, "success");
  } catch (err: any) {
    sendNotif(`Error adding student: ${err.response?.data?.message}`, "error");
  }
};

export const editStudents = async (params: GridCellEditCommitParams) => {
  const endpoint = `http://127.0.0.1:8080/api/v1/student/${params.id}?${params.field}=${params.value}`;
  try {
    await axios.put(endpoint);
    sendNotif(`Successfully updated ${params.field}`, "success");
  } catch (err) {
    sendNotif(`Error updating ${params.field}`, "error");
  }
};

export const deleteStudents = async (students: string) => {
  const endpoint = `http://127.0.0.1:8080/api/v1/student/${students}`;
  try {
    await axios.delete(endpoint);
    sendNotif("Successfully deleted data", "success");
  } catch (err) {
    sendNotif("Error deleting data", "error");
  }
};
