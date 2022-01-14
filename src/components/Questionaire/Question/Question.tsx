import React, { ReactElement } from 'react';
import { QuestionType } from '../../../util/constants';

const Question = ({
  item,
  children,
  revealedResults,
}: {
  item: QuestionType;
  children: ReactElement<any, any>;
  revealedResults: boolean;
}) => {
  const { question, answers } = item;

  return (
    <section>
      <h1>Question: {question}</h1>

      {children}

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
