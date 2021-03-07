import React from 'react'
import { ContainerQuestion, ContainerQuestionChild, ButtonTrue, ButtonFalse, Title, QuestionDescription, ButtonsSection, QuestionsCounter } from "../styles";
import { QuestionComponentPropsInterface } from "../interfaces/question-component-props.interface";

/*
** This local object stores some styles to give the question an animation
** when it is answered. It decreases all its content and gets a shadow,
** giving a 3D appearance going "deeper" in the screen.
*/
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

    // A state that stores whether user answered the question or not
    const [userAnswered, setUserAnswered] = React.useState<boolean>(false);

    // This function is triggered when user clicks on one of the True/False buttons
    const userClicked = (answer: "True" | "False") => {

        // Set answered as true and the styles automatically are affected by the const userAnsweredStyles
        setUserAnswered(true);

        /*
        ** After 0.3 second, the logic sends to the parent component that the question
        ** has been answered, the component goes up giving space for the next question
        ** and then, the answered question gets its normal size again even already hidden
        ** via other setTimeout(). The reason is, if user clicks to play the game again,
        ** it is already in its normal size. It's not the best place or logic to reset it,
        ** but since the challenge focuses on React instead of CSS, I figured out it would
        ** be a fast and functional solution so a I kept it.
        */
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
