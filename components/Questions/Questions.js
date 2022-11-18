import React, { useState } from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'

import styles from './Questions.module.css'

// TODO: correct answer shouldn't be a data attribute - put in state
export default function Questions() {
  const [results, setResults] = useState({})

  const { data, error } = useSWR(
    'https://opentdb.com/api.php?amount=4',
    fetcher,
    { revalidateOnFocus: false }
  )

  const handleAnswerClick = (e) => {
    const answerClicked = e.currentTarget.innerHTML
    const answerIdClicked = e.currentTarget.getAttribute('data-question-id')
    const correctAnswer = e.currentTarget.getAttribute('data-correct-answer')
    let answerIsCorrect

    answerClicked === correctAnswer
      ? (answerIsCorrect = true)
      : (answerIsCorrect = false)

    setResults((prevState) => ({
      ...prevState,
      [`q${+answerIdClicked}`]: answerIsCorrect,
    }))
  }

  return (
    <div className={styles.questions}>
      {error ? (
        <h2>Failed to load</h2>
      ) : !data ? (
        <h2>Loading...</h2>
      ) : (
        data.results.map((result, questionIndex) => {
          let correctAnswer = result.correct_answer
          let incorrectAnswers = [...result.incorrect_answers]
          let answers = [correctAnswer, ...incorrectAnswers]

          // Randomize sort
          answers.sort(() => Math.random() - 0.5)

          return (
            <div key={questionIndex}>
              <h2 dangerouslySetInnerHTML={{ __html: result.question }}></h2>
              {answers.map((answer, answerIndex) => (
                <p
                  key={answerIndex}
                  onClick={handleAnswerClick}
                  data-question-id={questionIndex}
                  data-correct-answer={correctAnswer}
                  dangerouslySetInnerHTML={{ __html: answer }}
                ></p>
              ))}
            </div>
          )
        })
      )}
    </div>
  )
}
