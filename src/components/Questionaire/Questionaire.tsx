import React, { useState } from 'react';
import { questions } from '../../util/survey';
import Question from './Question/Question';
import YouTube from 'react-youtube';
import { QuestionType } from '../../util/constants';
import Check from '../icons/Check/Check';
import Cross from '../icons/Cross/Cross';

const Questionaire = ({
  handleAnswerTally,
  correctAnswers,
  incorrectAnswers,
}: {
  handleAnswerTally: (isCorrect: boolean, remainingQuestions: number) => void;
  correctAnswers: number;
  incorrectAnswers: number;
}) => {
  // Sets initial state to a random question
  const [index, setIndex] = useState(
    Math.floor(Math.random() * questions.length),
  );
  const [question, setQuestion] = useState(questions[index]);
  const [surveyQuestions, setSurveyQuestions] = useState(questions);
  const [incorrectSurveyQuestions, setIncorrectSurveyQuestions] = useState(
    [] as QuestionType[],
  );
  const [showResultsButtons, setShowResultsButtons] = useState(false);
  const [complete, setComplete] = useState(false);
  const [started, setStarted] = useState(false);
  const [revealedResults, setRevealedResults] = useState(false);

  const handleQuestionAnswer = (isCorrect: boolean): void => {
    handleQuestionChange(isCorrect);
    handleAnswerTally(isCorrect, surveyQuestions.length - 1);
  };

  /* Handles removing answered questions from state. */
  const handleQuestionChange = (isCorrect: boolean) => {
    setRevealedResults(false);
    setShowResultsButtons(false);

    const updatedSurveyQuestions = [...surveyQuestions];
    const removedQuestion = updatedSurveyQuestions.splice(index, 1);
    setSurveyQuestions(updatedSurveyQuestions);

    // Pushes incorrect questions to an array so we can reference them on the completion screen.
    if (!isCorrect) {
      const updatedIncorrectSurveyQuestions: QuestionType[] = [
        ...incorrectSurveyQuestions,
      ];
      const combined = removedQuestion.concat(updatedIncorrectSurveyQuestions);
      setIncorrectSurveyQuestions(combined);
    }

    const updatedIndex = Math.floor(
      Math.random() * updatedSurveyQuestions.length,
    );
    setIndex(updatedIndex);

    if (updatedSurveyQuestions.length) {
      setQuestion(updatedSurveyQuestions[updatedIndex]);
    } else {
      setComplete(true);
    }
  };

  const handleResultReveal = () => {
    setRevealedResults(true);
    setShowResultsButtons(true);
  };

  return (
    <>
      {!started && (
        <section>
          <h1>Practice the United States of America Civics Test </h1>
          <p>
            The following quiz will test your knowledge on the United States
            Civics test. There are no multiple choice prompts, and much like the
            actual naturalization interview you'll be expected to answer these
            from memory. Please keep in mind that this test may not include
            every possible question and answer that you may encounter in the
            actual Civics test.
          </p>
          <p>
            Once you read the question, answer it aloud and then click "
            <strong>Reveal Answer</strong>". After that simply click Yes or No
            depending on if you got it right or not and it will keep track of
            your total score. Good luck!
          </p>
          <button
            className="button button--large"
            onClick={() => setStarted(true)}
          >
            Start Test
          </button>
        </section>
      )}

      {!complete && started && (
        <section>
          <Question item={question} revealedResults={revealedResults}>
            <button
              className="button button--large"
              onClick={() => handleResultReveal()}
              disabled={revealedResults}
            >
              Reveal Answer
            </button>
          </Question>

          <section>
            {showResultsButtons && (
              <div className="followup">
                <h2>Did you answer correctly?</h2>
                <div className="followup__button">
                  <button
                    className="button button--left"
                    onClick={() => handleQuestionAnswer(true)}
                  >
                    Yes
                  </button>
                  <button
                    className="button button--right"
                    onClick={() => handleQuestionAnswer(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            )}
          </section>
        </section>
      )}

      {!started}

      {complete && started && (
        <section className="results">
          <h1>
            {correctAnswers === questions.length
              ? 'Certified American'
              : correctAnswers > questions.length / 2
              ? 'Almost American'
              : 'Less than 50% American'}
          </h1>
          <p>
            You can find a breakdown of your answers below. For official
            documentation on the United States Civics Test refer to the{' '}
            <a
              href="https://www.uscis.gov/sites/default/files/document/questions-and-answers/100q.pdf"
              rel="noopener noreferrer"
            >
              USCIS website
            </a>
            .
          </p>

          {correctAnswers === questions.length ? (
            <YouTube videoId="HsdMfWJ7pvA" containerClassName="video-player" />
          ) : correctAnswers > questions.length / 2 ? (
            <YouTube videoId="oqdUepQjIf0" containerClassName="video-player" />
          ) : (
            <YouTube videoId="RDrfE9I8_hs" containerClassName="video-player" />
          )}

          <ul>
            <li>
              <div>
                <h3>Correct Answers: {correctAnswers}</h3>
                <Check />
              </div>
            </li>
            <li>
              <div>
                <h3>Incorrect Answers: {incorrectAnswers}</h3>
                <Cross />
              </div>
            </li>
          </ul>

          {incorrectSurveyQuestions.length ? (
            <section>
              <h2>You marked the following questions as incorrect...</h2>

              {incorrectSurveyQuestions.map((item, idx) => (
                <ul key={idx}>
                  <li>
                    <strong>Question</strong>: {item.question}
                  </li>
                  <li>
                    <strong>Answers</strong>:
                    <ul>
                      {item.answers.map((answer, index) => (
                        <li key={index}>{answer}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              ))}
            </section>
          ) : null}

          <a
            className="button button--large"
            href="https://jives.dev/us-civics-test-practice"
          >
            Start Again
          </a>
        </section>
      )}
    </>
  );
};

export default Questionaire;
