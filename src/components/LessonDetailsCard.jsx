import React from "react";

const LessonDetailsCard = ({ vocabulary }) => {
  const {
    id,
    word,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
    lesson_no,
    when_to_say,
    example,
  } = vocabulary;
//   Word, meaning, pronunciation, part_of_speech

  return (
    <div className={`flex flex-col justify-center items-start border-2 p-5 font-semibold gap-2 ${difficulty==="easy"?"bg-green-200":""} ${difficulty==="medium"?"bg-orange-200":""} ${difficulty==="difficulty"?"bg-red-200":""}`}>
      <p className="">Word: {word}</p>
      <p className="">Meaning: {meaning}</p>
      <p className="">Pronunciation: {pronunciation}</p>
      <p className="">Part of speech: {part_of_speech}</p>
      <button className="btn w-full">When to say</button>
      <button className="btn w-full">Pronouce</button>
    </div>
  );
};

export default LessonDetailsCard;
