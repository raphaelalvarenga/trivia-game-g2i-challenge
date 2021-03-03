import React from 'react'
import IntroComponent from './components/IntroComponent';
import QuestionComponent from './components/QuestionComponent';
import { Container } from "./styles";
import axios from 'axios';
import util from "./util/util";
import { Question } from "./classes/question.class";
import { Response } from "./classes/response.class";
import ScoreComponent from './components/ScoreComponent';

export default function App() {

    const [started, setStarted] = React.useState(false);
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [score, setScore] = React.useState(0);

    React.useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get(util.api)
            .then(result => {
                const response = result.data as Response;

                const questions: Question[] = response.results.map((result, index) => {

                    const {
                        category,
                        type,
                        difficulty,
                        question,
                        correct_answer,
                        incorrect_answers
                    } = result;

                    return new Question(
                        category,
                        type,
                        difficulty,
                        question,
                        correct_answer,
                        incorrect_answers,
                        index === 0,
                        ""
                    );
                });

                setQuestions(questions);
            })
            .catch(error => console.log(error));
    }

    const start = () => {
        setStarted(true);
    }

    const answered = (index: number, answer: string) => {
        let tempQuestions = questions.map(
            (questionLoop, indexLoop) => {

                const {
                    category,
                    type,
                    difficulty,
                    question,
                    correct_answer,
                    incorrect_answers,
                } = questionLoop;

                if (answer === correct_answer && index === indexLoop) {
                    setScore(score + 1);
                }
                
                return indexLoop > index ?
                    new Question(category, type, difficulty, question, correct_answer, incorrect_answers, true, "")
                    :
                    new Question(category, type, difficulty, question, correct_answer, incorrect_answers, false, answer);
            }
        );

        setQuestions(tempQuestions)
    }

    return (
        <Container>
            <IntroComponent started = {started} start = {start} />
            {
                questions.map((question: Question, index: number) => {

                    return (
                        <QuestionComponent
                            key = {index}
                            category = {question.category}
                            question = {question.question}
                            isActive = {question.isActive}
                            toggleActive = {(answer: string) => answered(index, answer)}
                            index = {index}
                        />
                    )
                })
            }

            <ScoreComponent />            
        </Container>
    )
}
