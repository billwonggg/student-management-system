import axios from "axios";
import { useEffect, useState } from "react";
import studentResponse from "./models";

const App = () => {
  const [students, setStudents] = useState<studentResponse[]>([]);

  const apiCall = async () => {
    const endpoint = "/api/v1/student";
    try {
      const response = await axios.get<studentResponse[]>(endpoint);
      setStudents(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      {students.map((student, i) => {
        return (
          <p
            key={i}
          >{`${student.firstname} ${student.surname}, ${student.dob}, ${student.email}, ${student.age} years old, ${student.gender}, ${student.mobile}`}</p>
        );
      })}
    </div>
  );
};
export default App;
