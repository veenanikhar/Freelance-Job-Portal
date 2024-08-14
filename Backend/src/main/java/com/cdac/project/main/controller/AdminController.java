package com.cdac.project.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.main.exceptions.CustomExceptions;
import com.cdac.project.main.model.Admin;
import com.cdac.project.main.service.AdminService;




@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private AdminService adminService;

	@PostMapping("/register")
	public ResponseEntity<String> registration(@RequestBody Admin admin) {
	    try {
	    	adminService.registration(admin);
	        return ResponseEntity.ok("Registration successful");
	    } catch (CustomExceptions e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	    }
	}

	@PostMapping("/login")
	public ResponseEntity<String> loginFreelancer(@RequestBody Admin user  ) {
	    try {
	        Admin loginAdmin = adminService.login(user.getEmailId(), user.getPassword(), user.getLoginAs());
	        return ResponseEntity.ok("Successfull Login");  // Return the role of the user
	    } catch (CustomExceptions e) {
	    	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	    } 
	}

}
