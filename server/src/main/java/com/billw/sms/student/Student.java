package com.billw.sms.student;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Table
public class Student {
    @Id
    @SequenceGenerator(
            name="student_sequence",
            sequenceName="student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    private int id;
    private String firstname;
    private String surname;
    private String email;
    private LocalDate dob;
    private char gender;
    private String mobile;

    @Transient
    private int age;

    public Student(int id, String firstname, String surname, String email, LocalDate dob, char gender, String mobile) {
        this.id = id;
        this.firstname = firstname;
        this.surname = surname;
        this.email = email;
        this.dob = dob;
        this.gender = gender;
        this.mobile = mobile;
    }

    public Student(String firstname, String surname, String email, LocalDate dob, char gender, String mobile) {
        this.firstname = firstname;
        this.surname = surname;
        this.email = email;
        this.dob = dob;
        this.gender = gender;
        this.mobile = mobile;
    }

    public Student() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", surname='" + surname + '\'' +
                ", email='" + email + '\'' +
                ", dob=" + dob +
                ", gender=" + gender +
                ", mobile='" + mobile + '\'' +
                '}';
    }

    public int getAge() {
        return Period.between(this.dob, LocalDate.now()).getYears();
    }
}
