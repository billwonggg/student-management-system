package com.billw.sms.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(
            StudentRepository repository
    ) {
        return args -> {
            Student bill = new Student(
                    "Bill",
                    "Wong",
                    "bill.wong@gmail.com",
                    LocalDate.of(2002, Month.DECEMBER, 1),
                    'M',
                    "0454893752"
            );
            Student ben = new Student(
                    "Ben",
                    "Smith",
                    "ben.smith@gmail.com",
                    LocalDate.of(2003, Month.OCTOBER, 5),
                    'M',
                    "0434543785"
            );
            repository.saveAll(List.of(bill, ben));
        };
    }
}
