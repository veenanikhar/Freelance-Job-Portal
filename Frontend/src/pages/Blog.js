import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogSection.css'; // Ensure the path is correct
import interview from "../assets/images/GroupInterview.jpg";
import interview_pre from "../assets/images/interviewPrepare.jpg";
import Job from "../assets/images/Job_Vacancy.jpg";

const Blog = () => {
  const { id } = useParams();

  const blogContent = {
    1: {
      title: "Discover Your Dream Job",
      date: "August 31, 2021",
      comments: "12 Comments",
      content: "Explore the latest job opportunities that match your skills and interests. Find the perfect job for you that helps you move forward in your career.",
      image: interview, // Directly assign the imported image
    },
    2: {
      title: "Master Your Job Interviews",
      date: "August 31, 2021",
      comments: "8 Comments",
      content: "Get expert tips and strategies to excel in your job interviews. Make a great impression and land your dream job.",
      image: interview_pre, // Directly assign the imported image
    },
    3: {
      title: "How to Prepare for Interviews Like a Pro",
      date: "July 3, 2024",
      comments: "5 Comments",
      content: "Learn essential interview preparation techniques that will boost your confidence.",
      image: Job, // Directly assign the imported image
    },
  };

  const blog = blogContent[id];

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="blog-section">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <h1 className="blog-title">{blog.title}</h1>
      <p className="blog-meta">{blog.date} - {blog.comments}</p>
      <p className="blog-content">{blog.content}</p>
    </div>
  );
};

export default Blog;