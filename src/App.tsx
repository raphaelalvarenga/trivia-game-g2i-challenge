import React from 'react'
import IntroComponent from './components/IntroComponent';
import QuestionComponent from './components/QuestionComponent';
import { Container } from "./styles";
import axios from 'axios';
import util from "./util/util";
import { Question } from "./classes/question.class";
import { Response } from "./classes/response.class";
import ScoreComponent from './components/ScoreComponent';
import "./global-styles.css";
import { decode } from "html-entities";

export default function App() {

    // Stores if the game started
    const [started, setStarted] = React.useState(false);

    /*
    ** Stores the questions got via API but also respecting the Question class,
    ** which extends the API class (Result class) with more properties
    */
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [score, setScore] = React.useState(0);
    const [isScoreScreenActive, setIsScoreScreenActive] = React.useState<boolean>(false);

    // As soon as the page loads, call the get-the-data function
    React.useEffect(() => {
        getData();
    }, []);

    // This function calls the API and sets its result in the questions state
    const getData = () => {

        // Calling the API
        axios
            .get(util.api)
            .then(result => {

                // Getting the data
                const response = result.data as Response;

                // Looping throught the data
                const questionsApi: Question[] = response.results.map((result, index) => {

                    // Many questions have encoded special characters. Decoding them...
                    result.question = decode(result.question);

                    // Destructuring the API
                    const {
                        category,
                        type,
                        difficulty,
                        question,
                        correct_answer,
                        incorrect_answers
                    } = result;

                    // Returning a new Question object
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

                // Update the questions state with the data formatted above
                setQuestions(questionsApi);
            })
            .catch(error => alert(error));
    }

    // When called, sets start to true
    const start = () => {
        setStarted(true);
    }

    // This function is triggered when user answers the question
    const answered = (index: number, answer: string) => {

        // The questions state will be stored in a temp variable to be updated later
        let tempQuestions = questions.map(
            (questionLoop, indexLoop) => {

                // Destructuring the loop question
                const {
                    category,
                    type,
                    difficulty,
                    question,
                    correct_answer,
                    incorrect_answers,
                    userAnswer
                } = questionLoop;

                // If user chose a right answer, increase score
                if (answer === correct_answer && index === indexLoop) {
                    setScore(score + 1);
                }

                // If user is in the last question, activate the score screen
                setIsScoreScreenActive(index === (questions.length - 1));
                
                // Return a new object with data updated
                return new Question(
                    category,
                    type,
                    difficulty,
                    question,
                    correct_answer,
                    incorrect_answers,
                    indexLoop > index,
                    indexLoop === index ? answer : userAnswer
                );
            }
        );

        // Update state questions with tempQuestions
        setQuestions(tempQuestions)
    }

    // Triggered when user clicks to play the game again in score screen
    const reset = () => {
        setScore(0);
        setIsScoreScreenActive(false);
        getData();
    }

    return (
        <Container style = {{overflow: isScoreScreenActive ? "scroll" : "hidden"}}>
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

            <ScoreComponent
                questions = {questions}
                score = {score}
                isScoreScreenActive = {isScoreScreenActive}
                reset = {reset}
            />
        </Container>
    )
}
