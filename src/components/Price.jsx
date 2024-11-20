import React from "react";
import 'animate.css';

const Price = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
      <div className="card bg-base-100 border-2">
        <div className="card-body justify-center items-center space-y-2">
          <h2 className="card-title text-2xl">Monthy</h2>
          <p>$10 per month</p>
          <p className="font-bold">$20 dollar savings!</p>
          <button className="btn">Subcribe</button>
        </div>
      </div>
      <div className="card bg-base-100 border-2">
        <div className="card-body justify-center items-center space-y-2">
          <h2 className="card-title text-2xl">Yearly</h2>
          <p>$100 per year</p>
          <p className="font-bold">$20 dollar savings!</p>
          <button className="btn">Subcribe</button>
        </div>
      </div>
    </div>
  );
};

export default Price;
