import React from "react";

const TutorialVideo = ({link}) => {
  return (
    <div className="flex justify-center items-center">
      <iframe
        width="95%"
        height="275"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default TutorialVideo;
