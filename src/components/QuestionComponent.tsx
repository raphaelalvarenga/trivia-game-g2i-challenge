import React from 'react'
import { ContainerQuestion, ContainerQuestionChild, ButtonTrue, ButtonFalse } from "../styles";
import { QuestionComponentPropsInterface } from "../interfaces/question-component.interface";

export default function QuestionComponent({category, question, isActive, toggleActive, index}: QuestionComponentPropsInterface) {
    return (
        <ContainerQuestion style = {{height: isActive ? "100vh" : 0}}>
            <ContainerQuestionChild>
                <h1>{category}</h1>

                <h1>{question}</h1>

                <h2>{index + 1} of 10</h2>

                <ButtonTrue onClick = {() => toggleActive("True")}>True</ButtonTrue>
                <ButtonFalse onClick = {() => toggleActive("False")}>False</ButtonFalse>
            </ContainerQuestionChild>
        </ContainerQuestion>
    )
}
