package com.cdac.project.main.service;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.main.exceptions.CustomExceptions;
import com.cdac.project.main.model.Client;
import com.cdac.project.main.model.Job;
import com.cdac.project.main.repository.ClientRepository;
import com.cdac.project.main.repository.JobRepository;

@Service
public class ClientService {
	
	@Autowired
	private ClientRepository clientRepository;

	@Autowired
    private JobRepository jobRepository;
	
	
	// register
	public Client registration(Client client) {
		if (client.getEmailId() == null || client.getEmailId().isEmpty()) {
			throw new CustomExceptions("Email cannot be null or empty");
		}

		if (!client.getPassword().equals(client.getConfirmPassword())) {
			throw new CustomExceptions("Confirmed password does not match");
		}

		// Check if email already exists
		if (clientRepository.existsByEmail(client.getEmailId())) {
			throw new CustomExceptions("Email already exists");
		}
		client.setPassword(Base64.getEncoder().encodeToString(client.getPassword().getBytes()));

		return clientRepository.save(client);
	}

	
	 public Client login(String email, String password, String loginAs) {
	       
		 Client client = clientRepository.findByEmail(email);
	        
	        if (client != null) {
	            // Decode the stored password
	            String decodedPassword = new String(Base64.getDecoder().decode(client.getPassword()));

	            // Verify the password and other details
	            if (decodedPassword.equals(password) && 
	                loginAs != null && loginAs.equals(client.getLoginAs())) {
	                return client;
	            }
	        }
	        throw new CustomExceptions("Invalid email, password, or role!");
	 }
	      

	 
	 
	 // update
	public Client updateClient(Long id, Client clientData) {
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Freelancer not found"));

		client.setFirstName(clientData.getFirstName());
		client.setLastName(clientData.getLastName());

		return clientRepository.save(client);
	}
	
	
	 public Job addJob(Long clientId, Job job) {
	        Client client = clientRepository.findById(clientId)
	            .orElseThrow(() -> new CustomExceptions("Client not found"));

	        client.addJob(job);
	        return jobRepository.save(job);
	    }

	    public Job updateJob(Long clientId, Long jobId, Job updatedJob) {
	        Job job = jobRepository.findById(jobId)
	            .orElseThrow(() -> new CustomExceptions("Job not found"));

	        if (!job.getClient().getClientId().equals(clientId)) {
	            throw new CustomExceptions("Unauthorized operation");
	        }

	        job.setTitle(updatedJob.getTitle());
	        job.setDescription(updatedJob.getDescription());
	        job.setStatus(updatedJob.getStatus());

	        return jobRepository.save(job);
	    }
	    
//	    public List<Job> getJobsByClient(Long clientId) {
//	        Client client = clientRepository.findById(clientId)
//	                .orElseThrow(() -> new CustomExceptions("Client not found"));
//
//	        return client.getJobs();
//	    }
	    
//	    public List<Job> getJobsByClient(Long clientId) {
//	        Client client = clientRepository.findById(clientId)
//	                .orElseThrow(() -> new CustomExceptions("Client not found"));
//	        
//	        List<Job> jobs = client.getJobs();
//	        System.out.println("Jobs: " + jobs); // Add this line to see what is being returned
//
//	        return jobs;
//	    }
	    
	    public List<Job> getJobsByClient(Long clientId) {
	        List<Job> jobs = clientRepository.findJobsByClientId(clientId);
	        if (jobs.isEmpty()) {
	            throw new CustomExceptions("No jobs found for the given client ID");
	        }
	        return jobs;
	    }

	
	
	
}
