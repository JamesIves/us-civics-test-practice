import React from "react";
import "./Navigation.css";
import { questions } from "../../util/survey";

const Navigation = ({
  correctAnswers,
  incorrectAnswers,
  remainingQuestions,
}: {
  correctAnswers: number;
  incorrectAnswers: number;
  remainingQuestions: number;
}) => {
  return (
    <nav className="navigation">
      <div className="navigation__container container">
        <div className="navigation__inner">
        <ul className="navigation__left">
          <li className="navigation__title"><span role="img">🇺🇸</span></li>
        </ul>

        <ul className="navigation__right">
          <li>
            <span role="img">✅</span> {correctAnswers}
          </li>

          <li>
            <span role="img">❌</span> {incorrectAnswers}
          </li>
          <li>
            <span role="img">⏲️</span> {questions.length - remainingQuestions}/{questions.length}
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
