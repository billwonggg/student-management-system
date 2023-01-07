package com.billw.sms.student;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    public void addNewStudent(Student student) {
        Optional<Student> studentWithEmail = studentRepository.findStudentByEmail(student.getEmail());
        if (studentWithEmail.isPresent()) {
            throw new IllegalArgumentException("Email already taken");
        }
        studentRepository.save(student);
    }

    public void deleteStudent(Integer studentId) {
        boolean studentExists = studentRepository.existsById(studentId);
        if (!studentExists) {
            throw new IllegalArgumentException("Student does not exist");
        }
        studentRepository.deleteById(studentId);
    }

    @Transactional
    public void updateStudent(Integer studentId, String email, String mobile) {
        Student student = studentRepository.findById(studentId).orElseThrow(() -> new IllegalArgumentException("Student does not exist"));
        if (!(email == null) && !email.isBlank() && !student.getEmail().equals(email)) {
            student.setEmail(email);
        }
        if (!(mobile == null) && !mobile.isBlank() && !student.getMobile().equals(mobile)) {
            student.setMobile(mobile);
        }
    }
}
