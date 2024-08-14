package com.cdac.project.main.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.main.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
	
	Admin findByEmail(String emailId);
	boolean existsByEmail(String email);

}
