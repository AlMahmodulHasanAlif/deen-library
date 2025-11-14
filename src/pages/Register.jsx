import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, setUser, updateUser, googleIn, verifyEmail } =
    useContext(AuthContext);
  const [nameError, setNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user.displayName, user.photoURL);
        toast.success("Google login successful!");
        navigate(location.state?.from || "/", { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 3) {
      setNameError("Name should be more than 3 character");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const mail = form.email.value;
    const password = form.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain uppercase, lowercase, and be at least 6 characters long"
      );
      return;
    } else {
      setPasswordError("");
    }

    createUser(mail, password)
      .then((result) => {
        const user = result.user;
        verifyEmail(result.user).then(() => {
          if (!result.user.emailVerified) {
            toast("Please verify your email before logging in.");
            setUser(null);
          } else {
            toast.success("verification successful");
          }
          import("firebase/auth").then(({ getAuth, signOut }) => {
            const auth = getAuth();
            signOut(auth);
          });
        });
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            toast.error(error);
          });
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode);
      });
  };

  return (
    <div className="flex items-center justify-center md:min-h-screen bg-black">
      <title>Register</title>
      {/* {form} */}
      <form
        onSubmit={handleRegister}
        className="card-body bg-teal-500 text-white w-full max-w-md  bg-base-100 rounded-lg shadow-lg"
      >
        <fieldset className="fieldset">
          <h2 className="text-center text-3xl font-semibold mb-5 border-b pb-5 border-white">
            Register your account
          </h2>
          {/* {name} */}
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input w-full text-black"
            placeholder="Name"
            required
          />
          <div>
            {nameError && <p className="text-error text-xs">{nameError}</p>}
          </div>

          {/* {phot url} */}
          <label className="label">Photo URl </label>
          <input
            name="photo"
            type="text"
            className="input w-full text-black"
            placeholder="Photo URl"
            required
          />
          {/* {email} */}
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input input w-full text-black"
            placeholder="Email"
            required
          />
          {/* {password} */}
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input w-full text-black"
            placeholder="Password"
            required
          />
          <div>
            {passwordError && (
              <p className="text-error text-xs">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn  mt-4 w-full bg-gradient-to-r from-[#FFFFFF] to-[#E0E0E0] text-teal-800"
          >
            Register
          </button>
          <p className="font-bold pt-3 text-[1.1rem]">
            Already have an account ?{" "}
            <Link className="text-teal-800 underline" to="/login">
              Login.
            </Link>
          </p>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn mt-4 w-full bg-gradient-to-r from-[#FFFFFF] to-[#E0E0E0] text-teal-800"
          >
            <FcGoogle className="text-2xl" />
            Signup with Google
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
