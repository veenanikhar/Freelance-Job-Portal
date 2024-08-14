//package com.cdac.project.main.model;
//
//import java.util.List;
//
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.OneToMany;
//import jakarta.persistence.Transient;
//
//@Entity
//public class Client {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long clientId;
//
//	private String firstName;
//	private String lastName;
//
//	@Column(unique = true, nullable = false)
//	private String email;
//
//	private String password;
//
//	private String confirmPassword;
//	private String loginAs;
//	
//
//	public Client() {
//		super();
//	}
//
//	public Client(Long clientId, String firstName, String lastName, String email, String password, String loginAs,
//			String confirmPassword) {
//		super();
//		this.clientId = clientId;
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.email = email;
//		this.loginAs = loginAs;
//		this.password = password;
//		this.confirmPassword = confirmPassword;
//	}
//
//	public Client(Long clientId, String firstName, String lastName, String email, String password,
//			String confirmPassword, String phoneNo, String companyName, List<Job> jobs) {
//		super();
//		this.clientId = clientId;
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.email = email;
//		this.loginAs = loginAs;
//		this.password = password;
//		this.confirmPassword = confirmPassword;
////		this.phoneNo = phoneNo;
////		this.companyName = companyName;
////		this.jobs = jobs;
//	}
//
//	public Long getClientId() {
//		return clientId;
//	}
//
//	public void setClientId(Long clientId) {
//		this.clientId = clientId;
//	}
//
//	public String getFirstName() {
//		return firstName;
//	}
//
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//
//	public String getLastName() {
//		return lastName;
//	}
//
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public String getConfirmPassword() {
//		return confirmPassword;
//	}
//
//	public void setConfirmPassword(String confirmPassword) {
//		this.confirmPassword = confirmPassword;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getLoginAs() {
//		return loginAs;
//	}
//
//	public void setLoginAs(String loginAs) {
//		this.loginAs = loginAs;
//	}
//	
//	
//
////	public String getPhoneNo() {
////		return phoneNo;
////	}
////
////	public void setPhoneNo(String phoneNo) {
////		this.phoneNo = phoneNo;
////	}
////
////	public String getCompanyName() {
////		return companyName;
////	}
////
////	public void setCompanyName(String companyName) {
////		this.companyName = companyName;
////	}
////
////	public List<Job> getJobs() {
////		return jobs;
////	}
////
////	public void setJobs(List<Job> jobs) {
////		this.jobs = jobs;
////	}
//
//}

package com.cdac.project.main.model;

import java.util.ArrayList;
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
public class Client {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long clientId;

	private String firstName;
	private String lastName;

	@Column(unique = true,nullable = false )
	private String email;

	private String password;

	private  String loginAs;
	

	private String confirmPassword;
	
	 @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<Job> jobs;



	public Client() {
		super();
	}
	
	public Client(Long clientId, String firstName, String lastName, String email, String password,
			String confirmPassword) {
		super();
		this.clientId = clientId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}
	
	

	public Client(Long clientId, String firstName, String lastName, String email, String password,
			String loginAs, String confirmPassword) {
		super();
		this.clientId = clientId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.loginAs = loginAs;
		this.confirmPassword = confirmPassword;
	}


	public Client(Long clientId, String firstName, String lastName, String email, String password, String loginAs,
			String confirmPassword, List<Job> jobs) {
		super();
		this.clientId = clientId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.loginAs = loginAs;
		this.confirmPassword = confirmPassword;
		this.jobs = new ArrayList<>();
	}

	public Long getClientId() {
		return clientId;
	}

	public void setClientId(Long clientId) {
		this.clientId = clientId;
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
	
	public void addJob(Job job) {
        jobs.add(job);
        job.setClient(this);
    }

    public void removeJob(Job job) {
        jobs.remove(job);
        job.setClient(null);
    }

	public List<Job> getJobs() {
		return null;
	}


}

