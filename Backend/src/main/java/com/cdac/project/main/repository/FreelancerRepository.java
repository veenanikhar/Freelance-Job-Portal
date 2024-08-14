package com.cdac.project.main.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.main.model.Freelancer;

public interface FreelancerRepository extends JpaRepository<Freelancer, Long> {
	
	Freelancer findByEmail(String emailId);
	boolean existsByEmail(String email);

}
