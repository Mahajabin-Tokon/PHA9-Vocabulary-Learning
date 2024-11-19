import React from 'react';

const LessonDetailsCard = ({vocabulary}) => {
    const {id, word, pronunciation, meaning, part_of_speech, difficulty, lesson_no, when_to_say, example} = vocabulary
    console.log(vocabulary)
    return (
        <div>
            {vocabulary.id}
        </div>
    );
};

export default LessonDetailsCard;