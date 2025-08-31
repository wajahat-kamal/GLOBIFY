import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import NewsLater from "../components/NewsLater";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <BlogList />
      <NewsLater/>
    </>
  );
}

export default Home;
