package com.billw.sms.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/student")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents() {
        return this.studentService.getStudents();
    }

    @PostMapping
    public void registerNewStudent(@RequestBody Student student) {
        studentService.addNewStudent(student);
    }

    @DeleteMapping(path = "{studentIds}")
    public void deleteStudent(@PathVariable("studentIds") String studentIds) {
        int[] ids = Arrays.stream(studentIds.split(",")).mapToInt(Integer::parseInt).toArray();
        for (int id : ids)
            studentService.deleteStudent(id);
    }

    @PutMapping(path = "{studentId}")
    public void updateStudent(@PathVariable("studentId") Integer studentId,
                              @RequestParam(required = false) String email,
                              @RequestParam(required = false) String mobile) {
        studentService.updateStudent(studentId, email, mobile);
    }
}
