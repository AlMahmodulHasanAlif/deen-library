import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, googleIn, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
    googleIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google login successful!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        if (!result.user.emailVerified) {
          toast("Please verify your email before logging in.");
          setUser(null);
        } else {
          toast.success("verification successful");
          setUser(user);
          navigate(location.state?.from || "/", { replace: true });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
      });
    import("firebase/auth").then(({ getAuth, signOut }) => {
      const auth = getAuth();
      signOut(auth);
    });
    navigate(location.state?.from || "/", { replace: true });
  };
  return (
    <div className="flex items-center justify-center md:min-h-150 bg-black">
      <title>Login</title>

      <form
        onSubmit={handleLogin}
        className="card-body bg-teal-500 text-white w-full max-w-md  bg-base-100 rounded-lg shadow-lg"
      >
        <fieldset className="fieldset">
          <h2 className="text-center text-3xl font-semibold">
            Log in to DeenLibrary
          </h2>
          <label className="label">Email</label>
          {/* {email} */}
          <input
            type="email"
            name="email"
            className="input input w-full text-black"
            placeholder="Email"
            required
          />
          {/* {password} */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full text-black"
            placeholder="Password"
            required
          />
          <div>
            <Link to="/login" className="link link-hover ">
              Forgot password?
            </Link>
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <p className="font-bold pt-3 text-[1.1rem]">
            Don't have an account ?&nbsp;
            <Link className="text-teal-900 underline" to="/register">
              Register.
            </Link>
          </p>
          <button
            type="submit"
            className="btn mt-4 w-full bg-gradient-to-r from-[#FFFFFF] to-[#E0E0E0] text-teal-800"
          >
            Login
          </button>
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="btn mt-4 w-full bg-gradient-to-r from-[#FFFFFF] to-[#E0E0E0] text-teal-800"
          >
            <FcGoogle className="text-2xl" />
            Login with Google
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
