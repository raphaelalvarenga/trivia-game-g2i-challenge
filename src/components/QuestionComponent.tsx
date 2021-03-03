import React from 'react'
import { ContainerQuestion, ContainerQuestionChild } from "../styles";
import { QuestionComponentPropsInterface } from "../interfaces/question-component.interface";

export default function QuestionComponent({category, question, active, toggleActive}: QuestionComponentPropsInterface) {
    return (
        <ContainerQuestion style = {{height: active ? "100vh" : 0}}>
            <ContainerQuestionChild>
                <h1>{category}</h1>

                <h1>{question}</h1>

                <h2>1 of 10</h2>

                <button onClick = {toggleActive}>Change</button>
            </ContainerQuestionChild>
        </ContainerQuestion>
    )
}
