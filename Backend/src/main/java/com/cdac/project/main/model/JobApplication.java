package com.cdac.project.main.model;

import jakarta.persistence.*;

@Entity
public class JobApplication {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long applicationId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "freelancer_id")
	private Freelancer freelancer;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "job_id")
	private Job job;

	private String coverLetter; // Optional

	public JobApplication() {
		super();
	}

	public JobApplication(Long applicationId, Freelancer freelancer, Job job, String coverLetter) {
		super();
		this.applicationId = applicationId;
		this.freelancer = freelancer;
		this.job = job;
		this.coverLetter = coverLetter;
	}

	public Long getApplicationId() {
		return applicationId;
	}

	public void setApplicationId(Long applicationId) {
		this.applicationId = applicationId;
	}

	public Freelancer getFreelancer() {
		return freelancer;
	}

	public void setFreelancer(Freelancer freelancer) {
		this.freelancer = freelancer;
	}

	public Job getJob() {
		return job;
	}

	public void setJob(Job job) {
		this.job = job;
	}

	public String getCoverLetter() {
		return coverLetter;
	}

	public void setCoverLetter(String coverLetter) {
		this.coverLetter = coverLetter;
	}

}
