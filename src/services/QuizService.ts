import { Quiz, quizQuestion } from '../types/QuizType';

const shuffleQuestions = (array : any[]) => [...array.sort(()=> Math.random() - 0.5)]


export async function QuizDetail(totalQues: number, quesDiff: string) : Promise <quizQuestion[]> {
    let response = await fetch(`https://opentdb.com/api.php?amount=${totalQues}&category=9&difficulty=${quesDiff}&type=multiple`);
    let { results } = await response.json();


    const QuizTesting: quizQuestion[] = results.map((quizObj: Quiz) => {
        return {
            question: quizObj.question,
            option: shuffleQuestions((quizObj.incorrect_answers.concat(quizObj.correct_answer))),
            answer: quizObj.correct_answer,
            correct_answer: quizObj.correct_answer
        }
    })

    return QuizTesting;
}