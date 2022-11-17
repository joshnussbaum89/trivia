import { useState } from 'react'
import Head from 'next/head'
import Questions from '../components/Questions'

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false)

  return (
    <>
      <Head>
        <title>Trivia</title>
        <meta name="description" content="A Trivia Game" />
      </Head>
      <main>
        <h1>Trivia</h1>
        {quizStarted ? (
          <button onClick={() => console.log('Get Results')}>
            Get Results
          </button>
        ) : (
          <button onClick={() => setQuizStarted(!quizStarted)}>
            Start Quiz
          </button>
        )}
        {quizStarted && <Questions />}
      </main>
    </>
  )
}
