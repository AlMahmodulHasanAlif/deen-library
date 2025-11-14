import React from "react";
import Banner from "../Components/Banner";
import { Link, Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <Link to="/">latest</Link>
        <Link to="/home-about">About</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
