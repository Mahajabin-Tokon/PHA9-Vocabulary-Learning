import React from "react";
import Banner from "../Banner";
import About from "../About";
import Success from "../Success";
import Feedback from "../Feedback";
import Price from "../Price";

const Home = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <Banner></Banner>
      </div>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <About></About>
      </div>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <Success></Success>
      </div>
      <div className="max-w-6xl mx-auto my-10 px-2">
        <div className="text-center text-4xl">Feedback</div>
        <Feedback></Feedback>
      </div>
      <div className="max-w-6xl mx-auto my-10 px-2">
        <div className="text-center text-4xl">Prices</div>
        <Price></Price>
      </div>
    </div>
  );
};

export default Home;
