package com.cdac.project.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.main.exceptions.CustomExceptions;
import com.cdac.project.main.model.Client;
import com.cdac.project.main.model.Freelancer;
import com.cdac.project.main.model.Job;
import com.cdac.project.main.service.ClientService;
import com.cdac.project.main.service.FreelancerService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/client")
public class ClientController {
	
	@Autowired
	private ClientService clientService;

	@PostMapping("/register")
	public ResponseEntity<String> registration(@RequestBody Client client) {
	    try {
	    	clientService.registration(client);
	        return ResponseEntity.ok("Registration successful");
	    } catch (CustomExceptions e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	    }
	}

	@PostMapping("/login")
	public ResponseEntity<String> loginFreelancer(@RequestBody Client user  ) {
	    try {
	        Client loginClient = clientService.login(user.getEmailId(), user.getPassword(), user.getLoginAs());
	        return ResponseEntity.ok("Successfull Login");  // Return the role of the user
	    } catch (CustomExceptions e) {
	    	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	    } 
	}

	@PutMapping("/{id}")
	public Client updateFreelancer(@PathVariable Long id, @RequestBody Client client) {
		return clientService.updateClient(id, client);
	}
	
	
	@PostMapping("/{clientId}/jobs")
    public ResponseEntity<Job> addJob(@PathVariable Long clientId, @RequestBody Job job) {
        Job createdJob = clientService.addJob(clientId, job);
        return new ResponseEntity<>(createdJob, HttpStatus.CREATED);
    }

    @PutMapping("/{clientId}/jobs/{jobId}")
    public ResponseEntity<Job> updateJob(@PathVariable Long clientId, @PathVariable Long jobId, @RequestBody Job job) {
        Job updatedJob = clientService.updateJob(clientId, jobId, job);
        return new ResponseEntity<>(updatedJob, HttpStatus.OK);
    }
    
//    @GetMapping("/{clientId}/jobs")
//    public ResponseEntity<List<Job>> getJobsByClient(@PathVariable Long clientId) {
//        List<Job> jobs = clientService.getJobsByClient(clientId);
//        return ResponseEntity.ok(jobs);
//    }
    
    @GetMapping("/{clientId}/jobs")
    public ResponseEntity<List<Job>> getJobsByClient(@PathVariable Long clientId) {
        try {
            List<Job> jobs = clientService.getJobsByClient(clientId);
            return ResponseEntity.ok(jobs);
        } catch (CustomExceptions e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    
    
    

	

}
