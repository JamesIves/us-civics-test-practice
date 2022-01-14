import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { QuestionType } from '../../../util/constants';

const Question = ({
  item,
  setShowResultsButtons,
}: {
  item: QuestionType;
  setShowResultsButtons: Dispatch<SetStateAction<boolean>>;
}) => {
  const [revealedResults, setRevealedResults] = useState(false);
  const { question, answers } = item;

  useEffect(() => {
    setRevealedResults(false);
    setShowResultsButtons(false);
  }, [item, setShowResultsButtons]);

  const handleResultReveal = () => {
    setRevealedResults(true);
    setShowResultsButtons(true);
  };

  return (
    <section>
      <h1>Question: {question}</h1>

      <button
        className="button button--large"
        onClick={() => handleResultReveal()}
        disabled={revealedResults}
      >
        Reveal Answer
      </button>

      {revealedResults && (
        <div className="answers">
          <h2>Answers:</h2>
          <ul>
            {answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Question;
