import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import StudentTable from "./Components/StudentTable";
import { getStudents } from "./Helpers/ApiHelpers";
// import RegistrationForm from "./Components/RegistrationForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import studentResponse from "./Models/student";

const App = () => {
  const [students, setStudents] = useState<studentResponse[]>([]);

  useEffect(() => {
    getStudents(setStudents);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ p: 2 }}>
      <ToastContainer />
      {/* <RegistrationForm /> */}
      <Typography variant="h2" mb={2}>
        Student Management System
      </Typography>

      <StudentTable students={students} setStudents={setStudents} />
    </Container>
  );
};
export default App;
