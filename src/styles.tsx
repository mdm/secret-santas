import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
padding: 1rem;
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

export const LinkButton = styled(Link)`
display:flex;
align-items: center;
background-color: dodgerblue;
color: white;
border: none;
border-radius: 5px;
height: 3rem;
min-width: 3rem;
margin-right: 0.5rem;
padding: 0 1rem;
text-decoration: none;

&:hover {
    background-color: rgb(60, 174, 255);
}
`;

export const ButtonText = styled.span`
padding-right: 0.5rem;
`;

export const Input = styled.input`
margin: 0.5rem;
border-radius: 5px;
height: 3rem;
width: 100%;
`;

export const Name = styled.div`
margin: 0.5rem;
display:flex;
align-items: center;
padding-left: 0.5rem;
background-color: lightgrey;
color: black;
border-radius: 5px;
height: 3rem;
width: 100%;

& span {
    text-decoration: line-through;
}
`;

export const FlexRow = styled.div`
display: flex;
align-items: center;
margin-bottom: 0.5rem;
`;