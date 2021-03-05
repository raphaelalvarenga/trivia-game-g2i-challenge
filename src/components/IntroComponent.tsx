import React from 'react'
import { IntroComponentPropsInterface } from '../interfaces/intro-component-props.interface';
import { BeginButton, ContainerIntro } from "../styles";

export default function IntroComponent({started, start}: IntroComponentPropsInterface) {
    return (
        <ContainerIntro style = {{height: started ? 0 : "100vh"}}>
            <h1>Welcome to the Trivia Challenge!</h1>
            <h1>You will be presented with 10 True of False questions.</h1>
            <h1>Can you score 100%?</h1>
            <div>
                <BeginButton onClick = {start}>Begin</BeginButton>
            </div>
        </ContainerIntro>
    )
}
