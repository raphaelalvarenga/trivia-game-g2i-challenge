import React from 'react'
import { Question } from '../classes/question.class';
import { BeginButton, ContainerScore, ScoreContent, ScoreIcon, ScoreQuestionDescription, Title } from "../styles";
import { MdCancel, MdCheckCircle } from "react-icons/md";

interface Props {
    questions: Question[];
    score: number;
    isScoreScreenActive: boolean;
    reset: () => void;
}

export default function ScoreComponent(props: Props) {
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
