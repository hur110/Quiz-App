import React,{useEffect, useState} from 'react';
import {quizQuestion} from '../src/types/QuizType'
import './App.css';
import {QuizDetail} from '../src/services/QuizService';
import QuestionsCard from "./Components/QuestionsCard";


function App() {
  let [ques, setQues] = useState<quizQuestion[]>([]);
  let [currentState, setCurrentState] = useState(0);
  let [score, setScore] = useState(0);

  useEffect(() => {
    async function QuizData() {
      let ApiQuestion = await QuizDetail(5,'easy');
      console.log(ques);
      setQues(ApiQuestion);
      // console.log(setQues(ApiQuestion));
      
    }
    QuizData();
  }, [])

  if (!ques.length)
    return <h1>Loading..</h1> 

  const handler = (e:React.FormEvent<EventTarget>,ans:string) => {
    e.preventDefault();
    const CorrectAns: quizQuestion = ques[currentState];
    console.log(`Correct Answer is: ${CorrectAns.correct_answer} and user select ${ans} `)
    if (ans === CorrectAns.correct_answer) {
        setScore(++score);
    }
    if (currentState !== ques.length - 1) {
      setCurrentState(++currentState)
    }
    else {
      alert(`Your Score is ${score} out of ${ques.length}`);
      setCurrentState(0);
      setScore(0);
    }
  }

  return (
    <div>
      <QuestionsCard option={ques[currentState].option}
      question={ques[currentState].question}
      callback = {handler}
      />
    </div>
  );
}

export default App;
