import axios from "axios";

import { useEffect, useState } from "react";
import StudentTable from "./Components/StudentTable";
// import RegistrationForm from "./Components/RegistrationForm";
import studentResponse from "./Models/student";

const App = () => {
  const [students, setStudents] = useState<studentResponse[]>([]);

  const apiCall = async () => {
    const endpoint = "/api/v1/student";
    try {
      const response = await axios.get<studentResponse[]>(endpoint);
      setStudents(response.data);
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      {/* <RegistrationForm /> */}
      <StudentTable students={students} />
    </div>
  );
};
export default App;
