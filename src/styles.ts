import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    box-sizing: border-box;
    font-family: Arial, Helvetica, Verdana;
    overflow: hidden;
`;

export const ContainerIntro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 0vh;
    overflow: hidden;
`;
    
export const ContainerQuestion = styled.div`
    overflow: hidden;
    transition: 1s;
`;

export const ContainerQuestionChild = styled.div`
    height: 100vh;
`;