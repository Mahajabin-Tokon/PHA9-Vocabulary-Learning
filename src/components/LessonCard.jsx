import React from "react";
import { Link } from "react-router-dom";

const LessonCard = ({ num }) => {
  return (
    <Link to={`/learning/${num}`} className="flex justify-center items-center border-2 p-5 ">
      <button className="text-2xl font-bold">Lesson {num}</button>
    </Link>
  );
};

export default LessonCard;
