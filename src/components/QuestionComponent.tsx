import React from 'react'
import { ContainerQuestion, ContainerQuestionChild } from "../styles";
import { QuestionComponentPropsInterface } from "../interfaces/question-component.interface";

export default function QuestionComponent({category, question, isActive, toggleActive, index}: QuestionComponentPropsInterface) {
    return (
        <ContainerQuestion style = {{height: isActive ? "100vh" : 0}}>
            <ContainerQuestionChild>
                <h1>{category}</h1>

                <h1>{question}</h1>

                <h2>{index + 1} of 10</h2>

                <button onClick = {() => toggleActive("True")}>Change</button>
            </ContainerQuestionChild>
        </ContainerQuestion>
    )
}
