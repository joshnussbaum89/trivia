import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Questions from '../components/Questions/Questions'

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false)

  return (
    <>
      <Head>
        <meta name="description" content="A Trivia Game" />
        <title>Trivia</title>
      </Head>
      <Header quizStarted={quizStarted} setQuizStarted={setQuizStarted} />
      <main>{quizStarted && <Questions />}</main>
    </>
  )
}
