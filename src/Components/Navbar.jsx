import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => toast("Sign out successful"))
      .catch((error) => toast.error(error.message));
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu text-white menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/all-books">All Books</NavLink>
              </li>
              <li>
                <NavLink to="/add-book">Add Book</NavLink>
              </li>
              <li>
                <NavLink to="/myBooks">My Books</NavLink>
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-books">All Books</NavLink>
            </li>
            <li>
              <NavLink to="/add-book">Add Book</NavLink>
            </li>
            <li>
              <NavLink to="/myBooks">My Books</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* Login/Register Buttons */}
          {!user && (
            <>
              <Link
                to="/register"
                className="mr-4 text-teal-800 px-6 py-2 font-semibold rounded-md bg-gradient-to-r from-[#FFFFFF] to-[#E0E0E0]"
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
          {/* Profile/Logout for logged-in users */}
          {user && (
            <>
              <Link to="/">
                <img
                  className="mr-3 rounded-full h-10"
                  src={user.photoURL}
                  referrerPolicy="no-referrer"
                  alt="User"
                  title={user?.displayName}
                />
              </Link>

              <li>
                <Link
                  to="/"
                  onClick={handleLogout}
                  className=" px-4 py-2 font-semibold rounded-md bg-gradient-to-r from-[#FFFFFF] to-[#E0E0E0] text-teal-800bg-gradient-to-r from-[#FFFFFF] to-[#E0E0E0] text-teal-800 mt-2 w-full text-center"
                >
                  Logout
                </Link>
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
