import styled from 'styled-components';

export const FormStyle = styled.div`
h1{
        font-size: 50px;
        margin: 50px;
    }
    div{
        font-size: 20px;
        margin: 20px;
    }
    input{
        margin-left: 15px;
        font-size: 15px;
    }
    input[type=text]{
        color: #fff;
        width: 100%;
        background-color: transparent;
        border: 2px solid #aaa;
        border-radius: 4px;
        margin: 8px 0;
        outline: none;
        padding: 8px;
        box-sizing: border-box;
        transition: .3s;
        font-size: 15px;
    }
    input[type=text]:focus{
        background-color: transparent;
        color: #fff;
        border-color:greenyellow;
        box-shadow: 0 0 8px 0 greenyellow;
    }
    input[type=textarea]{
        width: 100%;
        background-color: transparent;
        border: 2px solid #aaa;
        border-radius: 4px;
        margin: 8px 0;
        outline: none;
        padding: 8px;
        box-sizing: border-box;
        transition: .3s;
        font-size: 15px;
        color: #fff;
    }
    input[type=textarea]:focus{
        background-color: transparent;
        color: #fff;
        border-color:greenyellow;
        box-shadow: 0 0 8px 0 greenyellow;
    }
    button{
        
        margin-left: 20px;
    }
    textarea{
        color: #fff;
        width: 100%;
        background-color: transparent;
        border: 2px solid #aaa;
        border-radius: 4px;
        margin: 8px 0;
        outline: none;
        padding: 8px;
        box-sizing: border-box;
        transition: .3s;
        font-size: 15px;
    }
    textarea:focus {
        background-color: transparent;
        color: #fff;
        border-color:greenyellow;
        box-shadow: 0 0 8px 0 greenyellow;
    }
    .voltar{
        margin-left: 20px;
    }
    .FormButton{
        position: relative;
        display:inline-block;
        padding: 12px 36px;
        margin: 10px 0;
        color: #fff;
        font-family: 'Inconsolata', monospace;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 18px;
        letter-spacing: 2px;
        border-radius: 40px;
        background: linear-gradient(90deg, #000000, #0f9b0f);
    }
    .FormButton:hover{
        box-shadow: 0px 0px 20px #0f9b0f;
    }
`;
