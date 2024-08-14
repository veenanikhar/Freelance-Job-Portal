# Freelance Job Portal

The *Freelance Job Portal* is designed to transform how freelancers and clients connect and collaborate by providing a user-friendly and efficient platform. Built with modern technologies like React, Spring Boot, and MySQL, the portal ensures a robust and scalable solution for the challenges in the gig economy.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [API Endpoints](#api-endpoints)

## Introduction

The *Freelance Job Portal* is built to make the process of hiring freelancers and finding freelance jobs more efficient. The platform's main goals include:

- Offering an easy-to-use interface.
- Smart algorithms for matching freelancers with the right jobs.
- Integrated tools for seamless communication between freelancers and clients.
- Management of profiles, portfolios, and project details.
- Powerful administrative tools for ensuring smooth operation and scalability.

With a scalable design, this portal can adapt to future needs, setting a strong foundation for ongoing improvements and innovations in the freelance industry.

## Features

- *User Authentication:* Secure login and registration for freelancers and clients.
- *Job Matching:* Advanced algorithms to match freelancers with suitable job opportunities.
- *Profile Management:* Users can manage their profiles, portfolios, and project details.
- *Admin Dashboard:* Powerful tools for administrators to manage the platform and ensure smooth operations.

## Technologies Used

- *Frontend:* React
- *Backend:* Spring Boot
- *Database:* MySQL
- *Others:* RESTful APIs

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/veenanikhar/Freelance-Job-Portal.git
2. Navigate to the project directory:
   cd freelance-job-portal
3. Install frontend dependencies:
   cd frontend
   npm install
4. Install backend dependencies:
   cd ../backend
   mvn install
5. Set up the MySQL database and configure environment variables.
6. Start the frontend:
   cd frontend
   npm start
7. Start the backend:
   cd ../backend
   mvn spring-boot:run
## Usage

- Register as a freelancer or client.
- Post jobs or apply for jobs.
- Manage profiles, portfolios, and projects.
- Admins can monitor and manage the platform via the dashboard.

## Folder Structure


freelance-job-portal/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
├── backend/
│   ├── src/
│   │   ├── main/
│   │   ├── test/
│   │   └── ...
├── README.md
└── ...


## Components

- **Login/Signup Component:** Handles user authentication.
- **Job Listings Component:** Displays job postings for freelancers to apply.
- **Profile Component:** Manages user profiles and portfolios.
- **Admin Dashboard:** Provides administrators with tools to manage the platform.

## API Endpoints

- **Authentication:** `/api/auth/`
- **Jobs:** `/api/jobs/`
- **Users:** `/api/users/`
- **Admin:** `/api/admin/`

