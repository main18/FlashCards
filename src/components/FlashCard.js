import React, { useState } from "react";

export default function FlashCard({ FlashCard }) {
  const [flip, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!flip)}
      className={`card ${flip ? "flip" : ""}`}
    >
      <div className="front">
        {FlashCard.question}
        <div className="flashcard-options">
          {FlashCard.options.map((option) => {
            return <div className="flashcard-option">{option}</div>;
          })}
        </div>
      </div>
      <div className="back">{FlashCard.answer}</div>
    </div>
  );
}
