package com.cdac.project.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cdac.project.main.model.Job;

public interface JobRepository extends JpaRepository<Job, Long> {

	 List<Job> findByClient_ClientId(Long clientId);
	 
	 @Query("SELECT j FROM Job j WHERE LOWER(j.title) LIKE LOWER(CONCAT('%', :keyword, '%')) "
	 		+ "OR LOWER(j.description) LIKE LOWER(CONCAT('%', :keyword, '%'))")
	    List<Job> searchJobs(@Param("keyword") String keyword);

	    // Get all jobs
//	    List<Job> findAllJobsByJobId() ;
	 
}
