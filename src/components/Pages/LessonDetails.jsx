import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import LessonDetailsCard from "../LessonDetailsCard";

const LessonDetails = () => {
  const lessonNumFromURL = useParams();
  const data = useLoaderData();
  const [vocabs, setVocabs] = useState([]);

  useEffect(() => {
    const vocabInLesson = [...data].filter(
      (eachVocab) =>
        eachVocab.lesson_no === parseInt(lessonNumFromURL.lesson_no)
    );
    setVocabs(vocabInLesson);
  }, [data, lessonNumFromURL]);

  return (
    <div className="max-w-6xl mx-auto my-10 px-2">
      <div className="text-center my-10">
        <p className="text-center text-4xl font-bold">
          Lessons {lessonNumFromURL.lesson_no}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-2 p-2">
        {vocabs.map((eachVocabulary) => (
          <LessonDetailsCard
            key={eachVocabulary.id}
            vocabulary={eachVocabulary}
          ></LessonDetailsCard>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to="/learning" className="btn w-full font-bold">Back to Lesson</Link>
      </div>
    </div>
  );
};

export default LessonDetails;
