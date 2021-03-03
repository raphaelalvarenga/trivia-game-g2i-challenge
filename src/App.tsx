import React from 'react'
import IntroComponent from './components/IntroComponent';
import QuestionComponent from './components/QuestionComponent';
import { Container } from "./styles";

export default function App() {
    return (
        <Container>
            <IntroComponent />
            <QuestionComponent
                category = "Entertainment: Video Games"
                question = "Unturned originally started as a Roblox game."
            />
        </Container>
    )
}
