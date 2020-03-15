import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;

   span {
       font-size: 15px;
       font-weight: 400;
       margin-bottom: 5px;
       margin-top: 15px;
       color: #3c3c3c;
   }

   select {
       background: #FFF;
       border: 1px solid #3c3c3c;
       border-radius: 4px;
       padding: 10px;
       font-size: 12px;

       option {
           padding: 10px;
       }
   }
`;
