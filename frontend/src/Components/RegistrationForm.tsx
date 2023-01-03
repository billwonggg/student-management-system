import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { addStudent, getStudents } from "../Helpers/ApiHelpers";
import studentResponse from "../Models/student";

interface FormValues {
  firstname: string;
  surname: string;
  email: string;
  dob: string;
  gender: string;
  mobile: string;
}

interface RegistrationFormProps {
  setStudents: React.Dispatch<React.SetStateAction<studentResponse[]>>;
}
const RegistrationForm = ({ setStudents }: RegistrationFormProps) => {
  const [backdropOpen, setBackdropOpen] = useState<boolean>(false);
  const initialValues: FormValues = {
    firstname: "",
    surname: "",
    email: "",
    dob: "",
    gender: "",
    mobile: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      await addStudent(JSON.stringify(values));
      formik.resetForm();
      setBackdropOpen(false);
      await getStudents(setStudents, false);
    },
  });
  return (
    <>
      <Tooltip
        arrow
        title={<Typography variant="subtitle2">Add a Student to the Table</Typography>}
      >
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          onClick={() => setBackdropOpen(true)}
        >
          Add
        </Button>
      </Tooltip>
      <Dialog open={backdropOpen} onClose={() => setBackdropOpen(false)}>
        <DialogTitle sx={{ pb: 0, fontSize: 30 }}>Student Registration</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent sx={{ pt: 0 }}>
            <TextField
              autoFocus
              required
              id="firstname"
              label="First Name"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              variant="standard"
              margin="normal"
              fullWidth
            />
            <TextField
              required
              id="surname"
              label="Surname"
              value={formik.values.surname}
              onChange={formik.handleChange}
              variant="standard"
              margin="normal"
              fullWidth
            />
            <TextField
              required
              id="dob"
              label="Date of Birth"
              value={formik.values.dob}
              onChange={formik.handleChange}
              variant="standard"
              margin="normal"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth margin="normal" variant="standard">
              <InputLabel>Gender</InputLabel>
              <Select
                required
                name="gender"
                id="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                label="Gender"
              >
                <MenuItem value="M">Male</MenuItem>
                <MenuItem value="F">Female</MenuItem>
              </Select>
            </FormControl>
            <TextField
              required
              id="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              variant="standard"
              margin="normal"
              fullWidth
            />
            <TextField
              required
              id="mobile"
              label="Mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              variant="standard"
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setBackdropOpen(false);
                formik.resetForm();
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default RegistrationForm;
