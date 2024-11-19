import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
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
    <div>
      {vocabs.map((eachVocabulary) => (
        <LessonDetailsCard
          key={eachVocabulary.id}
          vocabulary={eachVocabulary}
        ></LessonDetailsCard>
      ))}
    </div>
  );
};

export default LessonDetails;
