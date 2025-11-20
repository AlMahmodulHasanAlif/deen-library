import React from "react";
import Banner from "../Components/Banner";
import { Link, Outlet } from "react-router";
import Latest from "./Latest";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Latest></Latest>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
