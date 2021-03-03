import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    box-sizing: border-box;
    font-family: Arial, Helvetica, Verdana;
    overflow: hidden;
    background-image: linear-gradient(to bottom right, #06388A, #8E5CFA);
    color: #F5F0FF;
    text-align: center;
`;

export const ContainerIntro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
    transition: 1s;
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
`;

export const ContainerQuestionChild = styled.div`
    height: 100vh;
`;

export const ContainerScore = styled.div`

`;