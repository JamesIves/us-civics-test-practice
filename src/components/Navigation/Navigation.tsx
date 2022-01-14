import React from 'react';
import './Navigation.css';
import { questions } from '../../util/survey';
import AmericanFlag from '../icons/AmericanFlag/AmericanFlag';
import Check from '../icons/Check/Check';
import Cross from '../icons/Cross/Cross';
import QuestionMark from '../icons/QuestionMark/QuestionMark';

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
            <li className="navigation__title" aria-label="American Flag">
              <AmericanFlag />
            </li>
          </ul>

          <ul className="navigation__right">
            <li aria-label="Correct Answers">
              <Check /> {correctAnswers}
            </li>

            <li aria-label="Incorrect Answers">
              <Cross /> {incorrectAnswers}
            </li>
            <li aria-label="Questions Remaining">
              <QuestionMark /> {questions.length - remainingQuestions}/
              {questions.length}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
