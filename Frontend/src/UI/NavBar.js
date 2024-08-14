import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" end={true}>
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </NavLink>
          </div>
          <div className="block lg:hidden">
            <button
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/home"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                style={{ textDecoration: 'none' }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                style={{ textDecoration: 'none' }}
              >
                About
              </NavLink>
              <NavLink
                to="/Blog"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                style={{ textDecoration: 'none' }}
              >
                Blog
              </NavLink>
              <NavLink
                to="/jobs"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                style={{ textDecoration: 'none' }}
              >
                Find Jobs
              </NavLink>
              <Link
                to="/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                LogOut
              </Link>
              <Button
                variant="secondary"
                className="px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => navigate('/signup')}
              >
                SignUp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
