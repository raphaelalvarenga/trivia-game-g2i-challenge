import React from 'react'
import { ContainerQuestion, ContainerQuestionChild, ButtonTrue, ButtonFalse, Title, QuestionDescription, ButtonsSection, QuestionsCounter } from "../styles";
import { QuestionComponentPropsInterface } from "../interfaces/question-component.interface";

export default function QuestionComponent({category, question, isActive, toggleActive, index}: QuestionComponentPropsInterface) {
    return (
        <ContainerQuestion style = {{height: isActive ? "100vh" : 0}}>
            <ContainerQuestionChild>
                <QuestionsCounter>{index + 1} of 10</QuestionsCounter>

                <Title>{category}</Title>

                <QuestionDescription>{question}</QuestionDescription>


                <ButtonsSection>
                    <ButtonTrue onClick = {() => toggleActive("True")}>True</ButtonTrue>
                    <ButtonFalse onClick = {() => toggleActive("False")}>False</ButtonFalse>
                </ButtonsSection>
            </ContainerQuestionChild>
        </ContainerQuestion>
    )
}
