import React from 'react'
import { ContainerQuestion, ContainerQuestionChild, ButtonTrue, ButtonFalse, Title, QuestionDescription, ButtonsSection, QuestionsCounter } from "../styles";
import { QuestionComponentPropsInterface } from "../interfaces/question-component-props.interface";

const userAnsweredStyles = {
    containerChild: {
        width: "60%",
        height: "60%",
        fontSize: "60%",
        boxShadow: "1px 1px 8px rgba(20, 20, 20, 0.2)"
    },

    buttons: {
        width: "150px",
        fontSize: "20px",
        height: "40px"
    }
}

export default function QuestionComponent({category, question, isActive, toggleActive, index}: QuestionComponentPropsInterface) {

    const [userAnswered, setUserAnswered] = React.useState<boolean>(false);

    const userClicked = (answer: "True" | "False") => {
        setUserAnswered(true);
        setTimeout(() => {
            toggleActive(answer)
            setTimeout(() => setUserAnswered(false), 300)
        }, 300);
    }

    return (
        <ContainerQuestion style = {{height: isActive ? "100vh" : 0}}>
            <ContainerQuestionChild style = {userAnswered ? userAnsweredStyles.containerChild : {}}>
                <QuestionsCounter>{index + 1} of 10</QuestionsCounter>

                <Title>{category}</Title>

                <QuestionDescription>{question}</QuestionDescription>


                <ButtonsSection>
                    <ButtonTrue
                        onClick = {() => userClicked("True")}
                        style = {userAnswered ? userAnsweredStyles.buttons : {}}
                    >True</ButtonTrue>
                    <ButtonFalse
                        onClick = {() => userClicked("False")}
                        style = {userAnswered ? userAnsweredStyles.buttons : {}}
                    >False</ButtonFalse>
                </ButtonsSection>
            </ContainerQuestionChild>
        </ContainerQuestion>
    )
}
