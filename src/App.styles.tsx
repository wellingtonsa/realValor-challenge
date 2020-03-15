import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: 100%;
`;


export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFF;
    border-radius: 5px;
    box-shadow: -1px -4px 40px -9px rgba(117,105,117,0.99);
    padding: 40px;

    img {
        margin-bottom: 10px;
    }

    h2 {
        color: #3c3c3c
    }
`;
