import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;

@media (min-width: 640px) {
    width: 640px;
    margin: 0 auto;
}
`;

export const Button = styled.button`
background-color: dodgerblue;
color: white;
border: none;
border-radius: 5px;
height: 3rem;
min-width: 3rem;
margin-right: 0.5rem;
padding: 0 1rem;

&:hover {
    background-color: rgb(60, 174, 255);
}
`;

export const ButtonText = styled.span`
padding-right: 0.5rem;
`;

export const Input = styled.input`
margin-right: 0.5rem;
border-radius: 5px;
height: 3rem;
width: 100%;
`;

export const Name = styled.div`
margin-right: 0.5rem;
display:flex;
align-items: center;
padding-left: 0.5rem;
background-color: lightgrey;
color: black;
border-radius: 5px;
height: 3rem;
width: 100%;
`;

export const FlexRow = styled.div`
display: flex;
margin-bottom: 0.5rem;
`;