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
public class Freelancer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long freelancerId;

	private String firstName;
	private String lastName;

	@Column(unique = true,nullable = false )
	private String email;

	private String password;

	private  String loginAs;
	

	private String confirmPassword;
	
	private String experience; 
    private String skills;     
    @Lob
    private byte[] resume;     
    private String linkedinLink; 
    private String githubLink;





	public Freelancer() {
		super();
	}
	
	public Freelancer(Long freelancerId, String firstName, String lastName, String email, String password,
			String confirmPassword) {
		super();
		this.freelancerId = freelancerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}
	
	

	public Freelancer(Long freelancerId, String firstName, String lastName, String email, String password,
			String loginAs, String confirmPassword) {
		super();
		this.freelancerId = freelancerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.loginAs = loginAs;
		this.confirmPassword = confirmPassword;
	}
	
	

	public Freelancer(Long freelancerId, String firstName, String lastName, String email, String password,
			String loginAs, String confirmPassword, String experience, String skills, byte[] resume,
			String linkedinLink, String githubLink) {
		super();
		this.freelancerId = freelancerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.loginAs = loginAs;
		this.confirmPassword = confirmPassword;
		this.experience = experience;
		this.skills = skills;
		this.resume = resume;
		this.linkedinLink = linkedinLink;
		this.githubLink = githubLink;
	}

	public Long getFreelancerId() {
		return freelancerId;
	}

	public void setFreelancerId(Long freelancerId) {
		this.freelancerId = freelancerId;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public byte[] getResume() {
        return resume;
    }

    public void setResume(byte[] resume) {
        this.resume = resume;
    }

	public String getLinkedinLink() {
		return linkedinLink;
	}

	public void setLinkedinLink(String linkedinLink) {
		this.linkedinLink = linkedinLink;
	}

	public String getGithubLink() {
		return githubLink;
	}

	public void setGithubLink(String githubLink) {
		this.githubLink = githubLink;
	}
	

}
