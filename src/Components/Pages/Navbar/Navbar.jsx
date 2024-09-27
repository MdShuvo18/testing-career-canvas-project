import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const{user,logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      toast.success('LogOut Successful!!')
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Resume Templates",
      path: "/resume-templates",
    },
    {
      title: "Job Postings",
      path: "/job-posting",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Premium Membership",
      path: "/premium-membership",
    },
    {
      title: "Resume Review",
      path: "/resume-review",
    },
    {
      title: "AI Chat",
      path: "/ai-chat",
    },
    {
      title: "User Profile",
      path: "/user-profile",
    },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <NavLink
                to={link.path}
                key={link.path}
                className={({ isActive }) =>
                  `ml-4  ${
                    isActive
                      ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-xl border-b-2 border-green-500"
                      : "text-lg font-semibold"
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Link
            to="/"
            className="btn btn-ghost text-3xl font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent"
          >
            Career Canvas
          </Link>
          <img
            className="w-16 h-16"
            src="/Blue White Modern Minimalist Name Logo.png" 
            alt="Career Canvas Logo"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        {links.map((link) => (
          <NavLink
            to={link.path}
            key={link.path}
            className={({ isActive }) =>
              `ml-4  ${
                isActive
                  ? "font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-xl border-b-2 border-green-500"
                  : "text-lg font-semibold"
              }`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>
      <div className="navbar-end space-x-2">
        {
        
        }
        {user ? (
          <>
         
            <Link
              onClick={handleLogOut}
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-green-500 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease font-bold">
                Sign Out
              </span>
              <span className="relative invisible">Sign Out</span>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/signin"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-green-500 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease font-bold">
                Sign In
              </span>
              <span className="relative invisible">Sign In</span>
            </Link>

            <Link
              to="/signup"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-green-500 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease font-bold">
                Sign Up
              </span>
              <span className="relative invisible">Sign Up</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
