import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import BlogCard from "../components/BlogCard";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <BlogList />
    </>
  );
}

export default Home;
