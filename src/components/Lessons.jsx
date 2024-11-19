import React from "react";
import LessonCard from "./LessonCard";

const Lessons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-4">
      <LessonCard num="1"></LessonCard>
      <LessonCard num="2"></LessonCard>
      <LessonCard num="3"></LessonCard>
      <LessonCard num="4"></LessonCard>
      <LessonCard num="5"></LessonCard>
      <LessonCard num="6"></LessonCard>
      <LessonCard num="7"></LessonCard>
      <LessonCard num="8"></LessonCard>
      <LessonCard num="9"></LessonCard>
      <LessonCard num="10"></LessonCard>
    </div>
  );
};

export default Lessons;
