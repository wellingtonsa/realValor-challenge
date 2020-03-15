import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background: #FFF;
    padding: 40px;
    width: 505px;
    border-radius: 4px;
    animation: show 1s;
    animation-fill-mode: forwards;
    
    @keyframes show {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.5;
        }
        100%{
            opacity: 1;
        }
    }
`;

export const Details = styled.div<{show:boolean}>`
    position: relative;
    background: #334495;
    color: #fff;
    padding-top: 10px;
    width: 505px;
    animation: show 1s;
    animation-fill-mode: forwards;
    cursor: pointer;
    .header {
        width: 100%;
        padding: 10px;
        border: 1px solid #fff;
        border-radius: 4px 4px 0px 0px;
    }

    .content {
        border: 1px solid #fff;
        border-top: 0px;
        background: #fff;
        color: #3c3c3c;
        opacity: ${props => props.show?'1': '0'};
        transition: 500ms;
        padding: 10px;

    }
    
    @keyframes show {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.5;
        }
        100%{
            opacity: 1;
        }
    }
`