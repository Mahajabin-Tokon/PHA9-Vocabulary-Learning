import React from "react";
import CountUp from "react-countup";


const Success = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      <div className="flex flex-col justify-center items-center border-2 py-4 ">
        <p className="font-bold">User Count</p>
        <CountUp end={10} duration={5} />
      </div>
      <div className="flex flex-col justify-center items-center border-2 py-4 ">
        <p className="font-bold">Lesson Count</p>
        <CountUp end={10} duration={5} />
      </div>
      <div className="flex flex-col justify-center items-center border-2 py-4 ">
        <p className="font-bold">Vocabulary Count</p>
        <CountUp end={200} duration={5} />
      </div>
      <div className="flex flex-col justify-center items-center border-2 py-4 ">
        <p className="font-bold">Tutorials Count</p>
        <CountUp end={6} duration={5} />
      </div>
    </div>
  );
};

export default Success;
