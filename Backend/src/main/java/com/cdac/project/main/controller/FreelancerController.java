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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.project.main.exceptions.CustomExceptions;
import com.cdac.project.main.model.Freelancer;
import com.cdac.project.main.model.Job;
import com.cdac.project.main.service.FreelancerService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/freelancer")
public class FreelancerController {

	@Autowired
	private FreelancerService freelancerService;
	
	

	@PostMapping("/register")
	public ResponseEntity<String> registration(@RequestBody Freelancer freelancer) {
	    try {
	        freelancerService.registration(freelancer);
	        return ResponseEntity.ok("Registration successful");
	    } catch (CustomExceptions e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	    }
	}


//	"http://localhost:8080/jobPortal/freelancer/login"
	@PostMapping("/login")
	public ResponseEntity<String> loginFreelancer(@RequestBody Freelancer user) {
	    try {
	        Freelancer loginAs = freelancerService.login(user.getEmailId(), user.getPassword(), user.getLoginAs());
	        return ResponseEntity.ok("Successfull Login");  // Return the role of the user
	    } catch (CustomExceptions e) {
	    	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	    } 
	}

	
	@PostMapping("/{freelancerId}/uploadResume")
    public ResponseEntity<String> uploadResume(@PathVariable Long freelancerId, @RequestPart("file") MultipartFile file) {
        try {
            String response = freelancerService.uploadResume(freelancerId, file);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload resume");
        }
    }

	
	 @GetMapping("/searchJobs")
	    public ResponseEntity<List<Job>> searchJobs(@RequestParam String keyword) {
	        List<Job> jobs = freelancerService.searchJobs(keyword);
	        return ResponseEntity.ok(jobs);
	    }

	    // Apply for a job
	    @PostMapping("/{freelancerId}/apply/{jobId}")
	    public ResponseEntity<String> applyForJob(@PathVariable Long freelancerId,
	                                               @PathVariable Long jobId,
	                                               @RequestParam(required = false) String coverLetter) {
	        try {
	            String response = freelancerService.applyForJob(freelancerId, jobId, coverLetter);
	            return ResponseEntity.ok(response);
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to apply for job");
	        }
	    }
//	
//	    @GetMapping("/searchAllJobs")
//	    public List<Job> listAllJobs() {
//	        return freelancerService.getAllJobs();
//	    }

}
