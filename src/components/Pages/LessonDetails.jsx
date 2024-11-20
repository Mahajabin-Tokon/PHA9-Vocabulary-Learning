import React, { useEffect, useState, useTransition } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import LessonDetailsCard from "../LessonDetailsCard";
import Modal from "../Modal";

const LessonDetails = () => {
  const lessonNumFromURL = useParams();
  const data = useLoaderData();
  const [vocabs, setVocabs] = useState([]);
  const [modalInfo, setModalInfo] = useState({});
  
  useEffect(() => {
    const vocabInLesson = [...data].filter(
      (eachVocab) =>
        eachVocab.lesson_no === parseInt(lessonNumFromURL.lesson_no)
    );
    setVocabs(vocabInLesson);
  }, [data, lessonNumFromURL]);

  const whenToSay = (wordId) => {
    const clickedVocab = vocabs.find(
      (eachVocabulary) => eachVocabulary.id === wordId
    );
    setModalInfo(clickedVocab);
    document.getElementById("my_modal_1").showModal();
  };

  const pronounceWord = (wordId) => {
    const clickedVocab = vocabs.find(
      (eachVocabulary) => eachVocabulary.id === wordId
    );

    const utterance = new SpeechSynthesisUtterance(clickedVocab.word);
    utterance.lang = "de-DE";
    window.speechSynthesis.speak(utterance);
  };

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
            whenToSay={whenToSay}
            pronounceWord={pronounceWord}
          ></LessonDetailsCard>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to="/learning" className="btn w-full font-bold">
          Back to Lesson
        </Link>
      </div>
      <Modal modalInfo={modalInfo}></Modal>
    </div>
  );
};

export default LessonDetails;
