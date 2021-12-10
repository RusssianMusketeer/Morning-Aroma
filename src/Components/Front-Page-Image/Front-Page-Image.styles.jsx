import styled from "styled-components";
import img from '../../Assets/Organic.jpg';


export const FrontPageContainer = styled.div `
width:100%;
height:700px;
position: relative;
`;

export const FrontPageImageDiv = styled.div `
width: 100%;
height: 100%;
margin: 0 auto;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${img});
position:absolute;
`;

export const FrontPageTextDiv = styled.div `
width: 80%;
height: 300px;
margin: 0 auto;
margin-top:8rem;
text-align: -webkit-right;

h1 {
    color:white;
    font-family: 'Dancing Script', cursive;
    font-size:80px;
    width: 700px;
    margin-bottom:0;
}

p{
    color:white;
    font-family: 'Dancing Script', cursive;
    font-size:30px;
    font-weight:600;
    width: 400px;
}

`;


export const ButtonContainerFrontPage = styled.button `
width:fit-content;
padding:20px;
background-color: transparent;
border-radius: 5px;
border-color:#FFFDD1;
border-style: solid;

font-family: 'Dancing Script', cursive;
font-weight:600;
font-size: 15px;
margin-left:3rem;


display: inline-block;
outline: 0;
cursor: pointer;
border-radius: 8px;
padding: 14px 24px 16px;
font-size: 30px;
font-weight: 700;
line-height: 1;
transition: transform 200ms,background 200ms;
background: transparent;
border-width:3px;
color: #FFFDD1;
:hover{
    transform: translateY(-2px);
    
}


`;

export const ButtonContainerDiv = styled.div`
display:flex;
justify-content: flex-end;
width:80%;
margin:0 auto;
margin-top:2rem;
`;