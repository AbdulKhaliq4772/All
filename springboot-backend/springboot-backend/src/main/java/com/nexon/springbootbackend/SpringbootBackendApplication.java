package com.nexon.springbootbackend;

import com.nexon.springbootbackend.model.Employee;
import com.nexon.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee();
//		employee.setFirstName("Abdul");
//		employee.setLastName("Khaliq");
//		employee.setEmailId("ak704047@gmail.com");
//		employeeRepository.save(employee);
//
//		Employee employee1 = new Employee();
//		employee.setFirstName("John");
//		employee.setLastName("Cena");
//		employee.setEmailId("cena@gmail.com");
//		employeeRepository.save(employee1);
	}
}
