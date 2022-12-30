import { Button, Typography } from "@mui/material";
import axios from "axios";

import { useEffect, useState } from "react";
import StudentTable from "./Components/StudentTable";
import { getStudents } from "./Helpers/ApiHelpers";
// import RegistrationForm from "./Components/RegistrationForm";
import studentResponse from "./Models/student";

const App = () => {
  const [students, setStudents] = useState<studentResponse[]>([]);

  useEffect(() => {
    getStudents(setStudents);
  }, []);

  return (
    <div>
      {/* <RegistrationForm /> */}
      <Typography>Students</Typography>
      <Button onClick={() => getStudents(setStudents)}>Refresh</Button>
      <StudentTable students={students} />
    </div>
  );
};
export default App;
