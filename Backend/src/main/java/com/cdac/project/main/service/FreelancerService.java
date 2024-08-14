package com.cdac.project.main.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.project.main.exceptions.CustomExceptions;
import com.cdac.project.main.model.Freelancer;
import com.cdac.project.main.model.Job;
import com.cdac.project.main.model.JobApplication;
import com.cdac.project.main.repository.FreelancerRepository;
import com.cdac.project.main.repository.JobApplicationRepository;
import com.cdac.project.main.repository.JobRepository;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@Service
public class FreelancerService {

    @Autowired
    private FreelancerRepository freelancerRepository;
    
    @Autowired
    private JobRepository jobRepository;
    
    @Autowired
    private JobApplicationRepository jobApplicationRepository2;



    public Freelancer registration(Freelancer freelancer) {
        if (freelancer.getEmailId() == null || freelancer.getEmailId().isEmpty()) {
            throw new CustomExceptions("Email cannot be null or empty");
        }

        if (!freelancer.getPassword().equals(freelancer.getConfirmPassword())) {
            throw new CustomExceptions("Confirmed password does not match");
        }

        // Check if email already exists
        if (freelancerRepository.existsByEmail(freelancer.getEmailId())) {
            throw new CustomExceptions("Email already exists");
        }

        freelancer.setPassword(Base64.getEncoder().encodeToString(freelancer.getPassword().getBytes()));
        return freelancerRepository.save(freelancer);
    }

    public Freelancer login(String email, String password, String loginAs) {
        Freelancer freelancer = freelancerRepository.findByEmail(email);
        
        if (freelancer != null) {
            // Decode the stored password
            String decodedPassword = new String(Base64.getDecoder().decode(freelancer.getPassword()));

            // Verify the decoded password and other details
            if (decodedPassword.equals(password) && 
                loginAs != null && loginAs.equals(freelancer.getLoginAs())) {
                return freelancer;
            }
        }

        throw new CustomExceptions("Invalid email, password, or role!");
    }


    public String uploadResume(Long freelancerId, MultipartFile file) throws IOException {
        Freelancer freelancer = freelancerRepository.findById(freelancerId)
                .orElseThrow(() -> new CustomExceptions("Freelancer not found"));

        // Convert MultipartFile to byte array
        byte[] resumeBytes = file.getBytes();
        freelancer.setResume(resumeBytes);

        freelancerRepository.save(freelancer);

        return "Resume uploaded successfully";
    }
    
    private JobApplicationRepository jobApplicationRepository;

    // Search for jobs based on a keyword
    public List<Job> searchJobs(String keyword) {
        return jobRepository.searchJobs(keyword);
    }

    // Apply for a job
    
    public String applyForJob(Long freelancerId, Long jobId, String coverLetter) {
        Freelancer freelancer = freelancerRepository.findById(freelancerId)
                .orElseThrow(() -> new RuntimeException("Freelancer not found"));

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        JobApplication application = new JobApplication();
        application.setFreelancer(freelancer);
        application.setJob(job);
        application.setCoverLetter(coverLetter);

        jobApplicationRepository.save(application);

        return "Applied successfully for job ID: " + jobId;
    }
//    
//    public List<Job> getAllJobs() {
//        return jobRepository.findAllJobs();
//    }
    
}
