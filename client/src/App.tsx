import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import RegistrationForm from "./Components/RegistrationForm";
import StudentTable from "./Components/StudentTable";
import { getStudents } from "./Helpers/ApiHelpers";
import studentResponse from "./Models/student";

const App = () => {
  const [students, setStudents] = useState<studentResponse[]>([]);

  useEffect(() => {
    getStudents(setStudents);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ p: 2 }}>
      <ToastContainer />
      <Typography variant="h2" mb={2} sx={{ fontSize: "calc(1.8vw + 2vh + 1.5vmin)" }}>
        Student Management System
      </Typography>

      <StudentTable students={students} setStudents={setStudents} />
      <RegistrationForm setStudents={setStudents} />
    </Container>
  );
};
export default App;
