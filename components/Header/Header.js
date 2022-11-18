import CTA from '../CTA/CTA'

import styles from './Header.module.css'

export default function Header({ quizStarted, setQuizStarted }) {
  return (
    <header className={styles.header}>
      <h1>Trivia</h1>
      {quizStarted ? (
        <CTA
          text="Get Results"
          handleClick={() => console.log('Get Results')}
        />
      ) : (
        <CTA
          text="Start Quiz"
          handleClick={() => setQuizStarted(!quizStarted)}
        />
      )}
    </header>
  )
}
