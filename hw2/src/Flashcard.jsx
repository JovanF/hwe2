
import React, { useState } from 'react';
import './App.css';

const Flashcard = ({ card }) => {
    const [showQuestion, setShowQuestion] = useState(true);

    const handleCardClick = () => {
        setShowQuestion(!showQuestion);
        console.log(showQuestion)
    };

    return (
        <div className="card" onClick={handleCardClick}>
            <h2>{showQuestion ? 'Question' : 'Answer'}</h2>
            <p>{showQuestion ? card.question : card.answer}</p>

        </div>
    );
};

export default Flashcard;
