package com.cdac.project.main.service;

import java.util.Base64;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.main.exceptions.CustomExceptions;
import com.cdac.project.main.model.Admin;
import com.cdac.project.main.repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin login(String email, String password, String loginAs) {
    	Admin admin = adminRepository.findByEmail(email);
        
        if (admin != null) {
            // Decode the stored password
            String decodedPassword = new String(Base64.getDecoder().decode(admin.getPassword()));

            // Verify the decoded password and other details
            if (decodedPassword.equals(password) && 
                loginAs != null && loginAs.equals(admin.getLoginAs())) {
                return admin;
            }
        }

        throw new CustomExceptions("Invalid email, password, or role!");
    }

    public Admin registration(Admin admin) {
        if (admin.getEmailId() == null || admin.getEmailId().isEmpty()) {
            throw new CustomExceptions("Email cannot be null or empty");
        }

        if (!admin.getPassword().equals(admin.getConfirmPassword())) {
            throw new CustomExceptions("Confirmed password does not match");
        }

        // Check if email already exists
        if (adminRepository.existsByEmail(admin.getEmailId())) {
            throw new CustomExceptions("Email already exists");
        }

        admin.setPassword(Base64.getEncoder().encodeToString(admin.getPassword().getBytes()));
        return adminRepository.save(admin);
    }

   
}
