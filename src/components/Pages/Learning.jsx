import React from "react";
import TutorialVideo from "../TutorialVideo";
import { Link } from "react-router-dom";
import Lessons from "../Lessons";

const Learning = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <p className="text-center text-4xl font-bold">Lessons</p>
      </div>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <Lessons></Lessons>
      </div>
      <div className="max-w-6xl mx-auto my-10 px-2">
        <TutorialVideo link="https://www.youtube.com/embed/axQGCdGCjAk?si=kU0iLEVthcCCeqmF"></TutorialVideo>
        <div className="text-center my-10">
          <Link to="/tutorials" className="btn w-full font-bold">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Learning;
