import React, { useState } from 'react'
import { PropsType } from "../types/QuizType";
const QuestionsCard: React.FC<PropsType> = ({ option, question, callback }) => {
    
    let [ans,setans] = useState("");
    const checking = (e:any) =>{
        // console.log(e.target.value);
        setans(e.target.value);
    }
    return (
        <div>
            <p>{question}</p>
            <div>
                <form onSubmit={ (e:React.FormEvent<EventTarget>)=>{callback(e,ans)} }>
                {
                    option.map((quesObj: string, indx: number) => {
                        return (
                            <div key={indx}>
                                <label>
                                    <input type='radio' value={quesObj} name='quesObj' required onChange={checking} checked={ans===quesObj} />
                                    {quesObj}
                                </label>
                            </div>

                        )
                    })}
                {/* {radioContent} */}

                <input type='submit' value='Submit' />
            </form>
        </div>
        </div >
    )
}

export default QuestionsCard
