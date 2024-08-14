package com.cdac.project.main.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cdac.project.main.model.Client;
import com.cdac.project.main.model.Freelancer;
import com.cdac.project.main.model.Job;

public interface ClientRepository extends JpaRepository<Client, Long> {
	
	Client findByEmail(String email);
	boolean existsByEmail(String email);
	
	@Query("SELECT j FROM Job j WHERE j.client.clientId = :clientId")
    List<Job> findJobsByClientId(@Param("clientId") Long clientId);

}
