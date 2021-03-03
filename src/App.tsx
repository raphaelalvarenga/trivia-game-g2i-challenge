import React from 'react'
import IntroComponent from './components/IntroComponent';
import QuestionComponent from './components/QuestionComponent';
import { Container } from "./styles";

export default function App() {

    const [actives, setActives] = React.useState([true, false, false]);

    return (
        <Container>
            <IntroComponent />
            <QuestionComponent
                category = "Entertainment: Video Games"
                question = "Unturned originally started as a Roblox game."
                active = {actives[0]}
                toggleActive = {() => setActives([!actives[0], !actives[1], actives[2]])}
            />

            <QuestionComponent
                category = "Mythology"
                question = "Rannamaari was a sea demon that haunted the people of the Maldives and had to be appeased monthly with the sacrifice of a virgin girl."
                active = {actives[1]}
                toggleActive = {() => setActives([actives[0], !actives[1], !actives[2]])}
            />

            <QuestionComponent
                category = "Science: Computers"
                question = "DHCP stands for Dynamic Host Configuration Port."
                active = {actives[2]}
                toggleActive = {() => setActives([actives[0], actives[1], actives[2]])}
            />
        </Container>
    )
}
