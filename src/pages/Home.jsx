import React from "react";
import Banner from "../Components/Banner";
import { Link, Outlet } from "react-router";
import Latest from "./Latest";
import TopRated from "./TopRated";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Latest></Latest>
      <TopRated></TopRated>
      <About></About>
    </div>
  );
};

export default Home;
