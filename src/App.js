import "./App.css";
import React, { useState, useEffect, createElement } from "react";
import axios from "axios";
import FlashCardList from "./components/FlashCardList";

function App() {
  const [flashCards, setFlashCards] = useState(SAMPLE_FLASH_CARDS);
  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
      setFlashCards(
        res.data.results.map((item, index) => {
          const answer = decodingText(item.correct_answer);
          const options = [
            ...item.incorrect_answers.map((a) => decodingText(a)),
            answer,
          ];
          const question = decodingText(item.question);
          return {
            id: `${index} ${Date.now()}`,
            question,
            answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        })
      );
    });
  }, []);

  return <FlashCardList flashCards={flashCards} />;
}

const SAMPLE_FLASH_CARDS = [
  {
    id: 1,
    question: "what's 4+3?",
    answer: "4",
    options: ["1", "5", "8", "71"],
  },
  {
    id: 2,
    question: "question 1 ?",
    answer: "4",
    options: ["1", "5", "8", "71"],
  },
  {
    id: 3,
    question: "question 1 ?",
    answer: "4",
    options: ["1", "5", "8", "71"],
  },
];

const decodingText = (text) => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};

export default App;
