import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => toast("Sign out successful"))
      .catch((error) => toast.error(error.message));
  };

  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm bg-teal-500 px-10">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu text-teal-500 menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-teal-500" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-books"
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-teal-500" : ""
                  }
                >
                  All Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-book"
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-teal-500" : ""
                  }
                >
                  Add Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myBooks"
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-teal-500" : ""
                  }
                >
                  My Books
                </NavLink>
              </li>
            </ul>
          </div>

          <img
            className="h-15 w-15 border border-white rounded-4xl"
            src={logo}
            alt=""
          />
          <NavLink className="ml-2 font-bold text-3xl text-white" to="/">
            Deen Library
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-white pb-1" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-books"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-white pb-1" : ""
                }
              >
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-book"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-white pb-1" : ""
                }
              >
                Add Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myBooks"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-white pb-1" : ""
                }
              >
                My Books
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col ml-20 md:ml-0 md:flex-row justify-center items-center ">
          <button
            onClick={toggleTheme}
            className={`mr-2 relative w-14 h-7 rounded-full flex items-center transition-all duration-300 
            ${dark ? "bg-gray-700" : "bg-gray-300"}`}
          >
            <span
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300
              ${dark ? "translate-x-7" : "translate-x-1"}`}
            ></span>
          </button>
          {!user && (
            <>
              <Link
                to="/register"
                className="my-1 md:mr-4 text-teal-800 px-6 py-2 font-semibold rounded-md bg-gradient-to-r from-[#FFFFFF] to-[#E0E0E0]"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="text-teal-800 px-7 py-2 font-semibold rounded-md bg-gradient-to-r from-[#FFFFFF] to-[#E0E0E0]"
              >
                Login
              </Link>
            </>
          )}

          {user && (
            <>
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full h-10"
                  src={user.photoURL}
                  referrerPolicy="no-referrer"
                  alt="User"
                  title={user?.displayName}
                />

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 font-semibold rounded-md bg-gradient-to-r from-[#FFFFFF] to-[#E0E0E0] text-teal-800"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
