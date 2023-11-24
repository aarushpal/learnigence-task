import React from "react";
import ReactPlayer from "react-player";
import Options from "./Options";
import Cards from "./Cards";
import Header from "./Header";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Navbar />
      <div className="flex mt-5">
        <div className="flex flex-col w-1/4 mr-2">
          <Cards />
          <Options />
        </div>
        <div className="flex w-3/4">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=o8vx8LqZ0Cg&list=PLMcpDl1Pr-viA25VUkHNmcUkWx9usPgyb"
            //   style={{ width: "100% !important", height: "100% !important" }}
            width={"800px"}
            height={"450px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
