import React from 'react'
import { BeginButton, ContainerScore, ScoreContent, ScoreIcon, ScoreQuestionDescription, Title } from "../styles";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import { ScoreComponentPropsInterface } from '../interfaces/score-component-props.interface';

export default function ScoreComponent(props: ScoreComponentPropsInterface) {
    const { questions, score, isScoreScreenActive, reset } = props;
    return (
        <ContainerScore style = {{
            height: isScoreScreenActive ? "auto" : 0,
            overflow: isScoreScreenActive ? "visible" : "hidden"
        }}>
            <Title>Correct Answers: {score}!</Title>
            {
                questions.map(question => {
                    const icon = question.correct_answer === question.userAnswer ? {
                        type: <MdCheckCircle />,
                        color: "rgb(0, 230, 0)"
                    } : {
                        type: <MdCancel />,
                        color: "rgb(230, 0, 0)"
                    }

                    return (
                        <ScoreContent key = {question.question}>
                            <ScoreIcon style = {{color: icon.color}}>{icon.type}</ScoreIcon>
                            <ScoreQuestionDescription>{question.question}</ScoreQuestionDescription>
                        </ScoreContent>
                    )
                })
            }

            <BeginButton onClick = {reset}>Play Again</BeginButton>
        </ContainerScore>
    )
}
