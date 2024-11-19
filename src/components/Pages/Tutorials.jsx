import React from "react";
import TutorialVideo from "../TutorialVideo";
import { Link } from "react-router-dom";

const Tutorials = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TutorialVideo link="https://www.youtube.com/embed/7T2kr_Vtgw8?si=YTQD4ekD3GYyyCEy"></TutorialVideo>
        <TutorialVideo link="https://www.youtube.com/embed/oqJwR6qOipY?si=nG_1WiIji_ORQPxm"></TutorialVideo>
        <TutorialVideo link="https://www.youtube.com/embed/iB_sassbnOw?si=zLvw7ZBgCbQaFMC2"></TutorialVideo>
        <TutorialVideo link="https://www.youtube.com/embed/ZPj5MO4_yDc?si=ShEStMkb-3jf7neh"></TutorialVideo>
        <TutorialVideo link="https://www.youtube.com/embed/TntALe8HpEw?si=8nydiaVK5onzk79m"></TutorialVideo>
        <TutorialVideo link="https://www.youtube.com/embed/cqS6vlpzeDw?si=RMahS0EE8ZDVUpEw"></TutorialVideo>
      </div>
      <div className="text-center my-10">
        <Link to="/learning" className="btn w-full font-bold">Start Learning</Link>
      </div>
    </div>
  );
};

export default Tutorials;
