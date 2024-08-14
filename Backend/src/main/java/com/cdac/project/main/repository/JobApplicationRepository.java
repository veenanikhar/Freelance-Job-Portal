package com.cdac.project.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.main.model.JobApplication;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
}
