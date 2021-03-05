import React from 'react'
import { Question } from '../classes/question.class';
import { ContainerScore } from "../styles";
import { MdCancel, MdCheckCircle } from "react-icons/md";

interface Props {
    questions: Question[];
    score: number;
}

export default function ScoreComponent(props: Props) {
    const { questions, score } = props;
    return (
        <ContainerScore>
            {
                questions.map(question => {
                    const icon = question.correct_answer === question.userAnswer ? <MdCheckCircle /> : <MdCancel />;
                    return (
                        <div
                            key = {question.question}
                            style = {{ display: "flex", alignItems: "center", marginBottom: "20px" }}
                        >
                            <div style = {{
                                fontSize: "50px",
                                marginRight: "20px",
                                color: question.correct_answer === question.userAnswer ? "rgb(0, 230, 0)" : "rgb(230, 0, 0)"
                            }}>
                                {icon}
                            </div>

                            <div style = {{
                                fontSize: "30px",
                                textAlign: "left",
                                marginTop: "-10px"
                            }}>
                                {question.question}
                            </div>
                        </div>
                    )
                })
            }
        </ContainerScore>
    )
}
