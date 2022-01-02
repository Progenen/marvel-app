import styled from "styled-components";



const ComicsCardInner = styled.div`
    max-width: 225px;
    width: 100%;
    margin: 0 28.5px 55px 28.5px;
    cursor: pointer;
`

const ComicsCardImg = styled.img`
    width: 100%;
    height: 100%;
    max-height: 346px;
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.25));
`

const ComicsCardTitle = styled.h3`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin: 10px 0 9px 0;
`
const ComicsCardPrice = styled.span`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #666;
`

export default function ComicsCard (props) {

    const {price, name, img} = props;

 
    return (
        <ComicsCardInner>
            <ComicsCardImg src={img} />
            <ComicsCardTitle>
                {name}
            </ComicsCardTitle>
            <ComicsCardPrice>
                {price !== false ? price : 'NOT AVAILABLE'}
            </ComicsCardPrice>
        </ComicsCardInner>
    )
}