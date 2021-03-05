import React from 'react'
import { Question } from '../classes/question.class';
import { ContainerScore, ScoreContent, ScoreIcon, ScoreQuestionDescription, Title } from "../styles";
import { MdCancel, MdCheckCircle } from "react-icons/md";

interface Props {
    questions: Question[];
    score: number;
}

export default function ScoreComponent(props: Props) {
    const { questions, score } = props;
    return (
        <ContainerScore>
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
        </ContainerScore>
    )
}
