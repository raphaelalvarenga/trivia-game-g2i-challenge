import React from 'react'
import { ContainerQuestion, ContainerQuestionChild } from "../styles";
import { QuestionComponentPropsInterface } from "../interfaces/question-component.interface";

export default function QuestionComponent({category, question}: QuestionComponentPropsInterface) {
    return (
        <ContainerQuestion>
            <ContainerQuestionChild>
                <h1>{category}</h1>

                <h1>{question}</h1>

                <h2>1 of 10</h2>
            </ContainerQuestionChild>
        </ContainerQuestion>
    )
}
