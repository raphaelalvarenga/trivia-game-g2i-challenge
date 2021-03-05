import styled, { css } from 'styled-components';

const answerButtons = css`
    width: 100%;
    height: 50px;
    color: white;
    font-size: 25px;
    border-radius: 10px;
    border-style: none;
    outline-style: none;
    cursor: pointer;
    box-shadow: 1px 1px 8px rgb(20, 20, 20);
    @media(min-width: 700px) {
        max-width: 300px;
        height: 80px;
    }
`;

export const Container = styled.div`
    height: 100vh;
    box-sizing: border-box;
    font-family: Arial, Helvetica, Verdana;
    background-image: linear-gradient(to bottom right, #06388A, #8E5CFA);
    color: #F5F0FF;
    text-align: center;
    padding: 0 20px;
`;

export const ContainerIntro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
    transition: 1s;
`;

export const ButtonsSection = styled.div`
    padding: 0 5px;
    @media(min-width: 700px) {
        display: flex;
        justify-content: space-around;
    }
`;

export const BeginButton = styled.button`
    font-size: 25px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border-style: none;
    background-color: transparent;
    color: #F5F0FF;
    box-shadow: 1px 1px 5px black;
    cursor: pointer;
    transition: 0.3s;
    outline-style: none;
    &:hover {
        box-shadow: 1px 1px 15px black;
    }
`;

export const ContainerQuestion = styled.div`
    overflow: hidden;
    transition: 1s;
    max-width: 1000px;
    margin: auto;
`;

export const ContainerQuestionChild = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
`;

export const QuestionsCounter = styled.h3`

`;

export const Title = styled.h1`
    
`;

export const QuestionDescription = styled.h2``;

export const ButtonTrue = styled.button`
    ${answerButtons};
    background-color: rgb(0, 230, 0);
    margin-bottom: 20px;
    &:hover {
        background-color: rgb(0, 200, 0);
    }
`;

export const ButtonFalse = styled.button`
    ${answerButtons};
    background-color: rgb(230, 0, 0);
    &:hover {
        background-color: rgb(200, 0, 0);
    }
`;

export const ContainerScore = styled.div`
    max-width: 1000px;
    margin: auto;
    padding-bottom: 5px;
`;

export const ScoreContent = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const ScoreIcon = styled.div`
    font-size: 30px;
    margin-right: 20px;

    @media(min-width: 900px) {
        font-size: 50px;
    }
`;

export const ScoreQuestionDescription = styled.div`
    font-size: 16px;
    text-align: left;
    margin-top: -10px;

    @media(min-width: 900px) {
        font-size: 25px;
    }
`;