import styled from 'styled-components';



// Colors

const colorRed = '#9F0013';
const colorModBlack = '#232222';


// Components

const Container = styled.div`
    max-width: 1130px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
`;

const Row = styled.div`
    display: flex;
    ${props => {
        if (props.justifyContent !== "") {
            return 'justify-content:' + props.justifyContent;
        } else {
            return;
        }
    }};

    ${props => {
        if (props.alignItems !== "") {
            return 'align-items:' + props.alignItems;
        } else {
            return;
        }
    }};
    ${props => {
        if (props.wrap) {
            return 'flex-wrap:' + props.wrap; 
        } else {
            return;
        }
    }};
`;

const Col = styled.div`
    flex: 0 1 ${props => props.size ? props.size : console.log("ERROR: PLEASE ENTER SIZE IN COL COMPONENT")};
    order: ${props => props.order ? props.order : '0'};
`;

const TitleH3 = styled.h3`
    font-size: 22px;
    font-weight: bold;
    margin: 0;
    color: ${props => props.color ? props.color : '#000'};
    ${props => props.active ? props.colorActive : props.color}
`;

const ButtonWrapper = styled.button`
    display: block;
    min-width: ${
        props => {
            switch (props.size) {
                case 'big': 
                    return '170px';
                case 'md':
                    return '101px';
                default:
                    return '101px';
            }
        }
    };
    border: none;
    background: transparent;
    position: relative;
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    text-transform: uppercase;
    padding: 0;
    cursor: pointer;
    &::before {
        content: '';
        display: block;
        height: 10px;
        margin-left: 10px;
        transition: none;

    }
    &::after {
        content: '';
        display: block;
        height: 10px;
        margin-right: 10px;
        transition: none;

    }
    &::before, &::after {
        background-color: ${props => props.colorBG === 'red' ? colorRed : '#5C5C5C'};
    }
    span {
        position: relative;
        background-color: ${props => props.colorBG === 'red' ? colorRed : '#5C5C5C'};
        transition: none;
        display: block;
        &::before {
            border-color: ${props => props.colorBG === 'red' ? colorRed : '#5C5C5C'} transparent;
            border-style: solid;
            border-width: 0 0 10px 10px;
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: -10px;
            transition: none;
        }
        &::after {
            border-color: ${props => props.colorBG === 'red' ? colorRed : '#5C5C5C'} transparent;
            border-style: solid;
            border-width: 0 0 10px 10px;
            content: "";
            display: block;
            position: absolute;
            right: 0;
            bottom: -10px;
            transform: rotate(180deg);
            transition: none;
        }
    }
`;

const TitleH2 = styled.h2`
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    margin: 0;
    color: ${props => props.color ? props.color : '#fff'};
`;

const Input = styled.input`
    width: 100%;
    max-width: ${props => props.size ? props.size : 'initial'};
    height: 38px;
    background: #fff;
    border: none;
    padding: 10.45px 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    &::placeholder {
        font-size: 14px;
        line-height: 16px;
    }
`

function Button (props) {
    return (
        <ButtonWrapper size={props.size} colorBG={props.colorBG}>
            <span>{props.children}</span>
        </ButtonWrapper>
    )
}
export { Container, Row, Col, colorRed, colorModBlack, TitleH3, TitleH2, Button, Input };
