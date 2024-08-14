package com.cdac.project.main.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;

@Entity
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long adminId;

	private String firstName;
	private String lastName;

	@Column(unique = true,nullable = false )
	private String email;

	private String password;

	private  String loginAs;
	

	private String confirmPassword;

	public Admin() {
		super();
	}
	
	public Admin(Long freelancerId, String firstName, String lastName, String email, String password,
			String confirmPassword) {
		super();
		this.adminId = freelancerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}
	
	

	public Admin(Long freelancerId, String firstName, String lastName, String email, String password,
			String loginAs, String confirmPassword) {
		super();
		this.adminId = freelancerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.loginAs = loginAs;
		this.confirmPassword = confirmPassword;
	}

//	public Freelancer(Long freelancerId, String firstName, String lastName, String emailId, String password,
//			String confirmPassword, String phoneNo, String qualifications, String skills, byte[] resume,
//			String linkedInLink, String githubLink, List<AppliedJob> appliedJobs) {
//		super();
//		this.freelancerId = freelancerId;
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.emailId = emailId;
//		this.password = password;
//		this.confirmPassword = confirmPassword;
//		this.phoneNo = phoneNo;
//		this.qualifications = qualifications;
//		this.skills = skills;
//		this.resume = resume;
//		this.linkedInLink = linkedInLink;
//		this.githubLink = githubLink;
//		this.appliedJobs = appliedJobs;
//	}

	public Long getFreelancerId() {
		return adminId;
	}

	public void setFreelancerId(Long adminId) {
		this.adminId = adminId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return email;
	}

	public void setEmailId(String emailId) {
		this.email = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getLoginAs() {
		return loginAs;
	}

	public void setLoginAs(String loginAs) {
		this.loginAs = loginAs;
	}
}
