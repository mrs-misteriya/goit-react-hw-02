import { useState } from 'react'
import css from './App.module.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'

export default function App() {
  const [count, setCount] = useState({
	good: 0,
	neutral: 0,
	bad: 0,
})

  return (
    <>
      <div className={css.container}>
        <Description />
        <Options />
        {/* <Options />
        <Options />
        <Options /> */}
        <Feedback count={count}/>
      </div>
    </>
  )
}

