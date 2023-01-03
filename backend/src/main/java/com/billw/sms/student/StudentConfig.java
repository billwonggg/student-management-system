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
            repository.saveAll(List.of(new Student("Jaquenette", "Newlyn", "jnewlyn0@ucla.edu", LocalDate.of(1996, Month.JUNE, 13), 'F', "0413532473"),
                    new Student("Lee", "Rolstone", "lrolstone1@berkeley.edu", LocalDate.of(1999, Month.OCTOBER, 27), 'F', "0430188734"),
                    new Student("Chen", "Feldmus", "cfeldmus2@stanford.edu", LocalDate.of(1999, Month.DECEMBER, 25), 'M', "0406986543"),
                    new Student("Ebenezer", "Cicccitti", "ecicccitti3@berkeley.edu", LocalDate.of(1997, Month.SEPTEMBER, 11), 'M', "0448683364"),
                    new Student("Elaina", "Cooke", "ecooke4@unimelb.edu", LocalDate.of(2002, Month.OCTOBER, 8), 'F', "0434825840"),
                    new Student("Leyla", "Jansey", "ljansey5@ucla.edu", LocalDate.of(1997, Month.MARCH, 21), 'F', "0442645176"),
                    new Student("Barnie", "Cofax", "bcofax6@unimelb.edu", LocalDate.of(1997, Month.JULY, 17), 'M', "0401910994"),
                    new Student("Nicol", "Bruckshaw", "nbruckshaw7@ucla.edu", LocalDate.of(2002, Month.OCTOBER, 12), 'M', "0486018440"),
                    new Student("Templeton", "Paroni", "tparoni8@berkeley.edu", LocalDate.of(1995, Month.FEBRUARY, 13), 'M', "0472411610"),
                    new Student("Kiel", "Quaife", "kquaife9@ucla.edu", LocalDate.of(2002, Month.JANUARY, 1), 'M', "0498765837"),
                    new Student("Hilliary", "Finnis", "hfinnisa@unimelb.edu", LocalDate.of(1998, Month.NOVEMBER, 5), 'F', "0466403506"),
                    new Student("Rudolph", "O'Brogane", "robroganeb@berkeley.edu", LocalDate.of(1999, Month.JUNE, 18), 'M', "0468360505"),
                    new Student("Elroy", "Burney", "eburneyc@stanford.edu", LocalDate.of(1996, Month.SEPTEMBER, 8), 'M', "0497782996"),
                    new Student("Fidelio", "Mitchel", "fmitcheld@ucla.edu", LocalDate.of(2002, Month.MARCH, 25), 'M', "0448073270"),
                    new Student("Burton", "Howlings", "bhowlingse@stanford.edu", LocalDate.of(2000, Month.OCTOBER, 4), 'M', "0497429020"),
                    new Student("Buffy", "O'Carran", "bocarranf@nyu.edu", LocalDate.of(2001, Month.JULY, 13), 'F', "0426479621"),
                    new Student("Mikaela", "Koch", "mkochg@unimelb.edu", LocalDate.of(1995, Month.NOVEMBER, 6), 'F', "0493063864"),
                    new Student("Georgi", "Rounce", "grounceh@usyd.edu", LocalDate.of(1997, Month.AUGUST, 6), 'M', "0478683271"),
                    new Student("Shanan", "Droogan", "sdroogani@berkeley.edu", LocalDate.of(1995, Month.AUGUST, 25), 'M', "0413335639"),
                    new Student("Ursa", "Goodier", "ugoodierj@berkeley.edu", LocalDate.of(2002, Month.OCTOBER, 26), 'F', "0492484508")));
        };
    }
}
