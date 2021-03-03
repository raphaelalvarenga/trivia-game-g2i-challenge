import React from 'react'
import IntroComponent from './components/IntroComponent';
import QuestionComponent from './components/QuestionComponent';
import { Container } from "./styles";
import axios from 'axios';
import util from "./util/util";
import { Question } from "./classes/question.class";
import { Response } from "./classes/response.class";

export default function App() {

    const [questions, setQuestions] = React.useState<Question[]>([]);

    React.useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get(util.api)
            .then(result => {
                const response = result.data as Response;

                const questions: Question[] = response.results.map(result => {

                    const {
                        category,
                        type,
                        difficulty,
                        question,
                        correct_answer,
                        incorrect_answers
                    } = result;

                    return new Question(category, type, difficulty, question, correct_answer, incorrect_answers, false);
                });

                setQuestions(questions);
            })
            .catch(error => console.log(error));
    }

    const answered = (question: Question) => {
        console.log(question)
    }

    return (
        <Container>
            <IntroComponent />
            {
                questions.map((question: Question, index: number) => (
                    <QuestionComponent
                        key = {index}
                        category = {question.category}
                        question = {question.question}
                        isActive = {true}
                        toggleActive = {() => answered(question)}
                    />
                ))
            }
            
        </Container>
    )
}
