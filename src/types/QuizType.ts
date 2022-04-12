import React from 'react';
export type Quiz = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
}

export type quizQuestion = {
    question: string,
    option: string[],
    answer: string,
    correct_answer: string,
}
export type PropsType ={
    option: string[],
    question: string,
    callback: (e:React.FormEvent<EventTarget>,ans:string) => void
}