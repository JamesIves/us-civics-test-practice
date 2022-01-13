import React, { useState } from "react";
import Questionaire from "./components/Questionaire/Questionaire";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { questions } from "./util/survey";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [remainingQuestions, setRemainingQuestions] = useState(questions.length);

  const handleAnswerTally = (
    isCorrect: boolean,
    remainingQuestions: number
  ) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    setRemainingQuestions(remainingQuestions);
  };

  return (
    <div className="app">
      <Navigation

        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
        remainingQuestions={remainingQuestions}
      />
      <main className="container">
        <Questionaire
          handleAnswerTally={handleAnswerTally}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
