import React from "react";

const LessonCard = ({ num }) => {
  return (
    <div className="border-2 p-5 ">
      <h2 className="text-center text-2xl font-bold">Lesson {num}</h2>
    </div>
  );
};

export default LessonCard;
