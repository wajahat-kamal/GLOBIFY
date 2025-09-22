import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import NewsLater from "../components/NewsLater";
import Footer from "../components/Footer";

function Home() {
  return (
    <div
      className="min-h-screen bg-[#EEF2FE] bg-cover bg-center bg-no-repeat mainBG"
    >
      <Navbar />
      <Header />
      <BlogList />
      <NewsLater />
      <Footer />
    </div>
  );
}

export default Home;
