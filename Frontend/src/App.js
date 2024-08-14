import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./UI/NavBar";
import Footer from "./UI/Footer";
import Home from "./pages/Home"; // Home component
import HomeScreen from "./pages/HomeScreen"; // HomeScreen component
import Blog from "./pages/Blog";
import Jobs from "./pages/Jobs";
// import AboutSection from "./pages/AboutSection";
import SignUp from "./pages/SignUp";
import LoginForm from "./pages/LoginForm";
import ClientHome from "./pages/ClientHome";
import AdminHome from "./pages/AdminHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route for HomeScreen, no NavBar or Footer */}
          <Route path="/" element={<HomeScreen />} />

          {/* Route for other pages, includes NavBar and Footer */}
          <Route
            path="*"
            element={
              <>
                <NavBar />{" "}
                {/* Navigation bar will be visible on all pages except HomeScreen */}
                <Routes>
                  <Route path="home" element={<Home />} />
                  {/* <Route path="blog" element={<Blog/>}/> */}
                  <Route path="blog/:id" element={<Blog />} />{" "}
                  {/* Dynamic Blog component */}
                  <Route path="client-dashboard" element={<ClientHome />} />
                  <Route path="admin-dashboard" element={<AdminHome />} />
                  <Route path="jobs" element={<Jobs />} />
                  {/* <Route path="about" element={<AboutSection />} /> */}
                  <Route path="signup" element={<SignUp />} />
                  <Route path="login" element={<LoginForm />} />
                </Routes>
                <Footer />{" "}
                {/* Footer will be visible on all pages except HomeScreen */}
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
