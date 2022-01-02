import styled from 'styled-components';
import { Button, Col, colorModBlack, Row, TitleH2, TitleH3 } from '../all/all';
import thumbnail from './thumbnail.png';
import randomCharRightBg from '../../images/molot_shield.png';

const RandomCharInner = styled.section`
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
`;

const RandomCharCol = styled(Col)`
    padding: 35px 35px 35px 40px;
`;

const RandomCharleft = styled(RandomCharCol)`
    background: #fff;
    display: flex;
`;

const RandomCharRight = styled(RandomCharCol)`
    background: ${colorModBlack};
    background-image: url(${randomCharRightBg});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 110% 105%;
`;

const RandomCharLeftImg = styled.img`
    max-width: 180px;
    max-height: 180px;
    width: 100%;
    height: 100%;
`;

const RandomCharLeftInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 30px;
`;

const RandomChartLeftText = styled.p`
    max-width: 265px;
    width: 100%;
    margin: 13px 0;
    height: 100%;
`;

const RandomCharLeftUi = styled.div`
    display: flex;
    button {
        margin-right: 30px
    }
    buttom:last-child {
        margin-right: 0;
    }
`;

const RandomCharLeftBtn = styled(Button)`
    margin-right: 30px;
`;

const RandomCharRightTitle2 = styled(TitleH2)`
    margin-top: 40px;
    margin-bottom: 17px;
`;

function RandomChar () {
    return (    
        <RandomCharInner>
            <Row>
                <RandomCharleft size="50%">
                    <RandomCharLeftImg src={thumbnail} />
                    <RandomCharLeftInfo>
                        <TitleH3>
                            THOR
                        </TitleH3>
                        <RandomChartLeftText>
                            As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                        </RandomChartLeftText>
                        <RandomCharLeftUi>
                            <RandomCharLeftBtn size="md" colorBG="red">
                                <span>HOMEPAGE</span>
                            </RandomCharLeftBtn>
                            <RandomCharLeftBtn size="md" colorBG="gray">
                                <span>WIKI</span>
                            </RandomCharLeftBtn>
                        </RandomCharLeftUi>
                    </RandomCharLeftInfo>
                </RandomCharleft>
                <RandomCharRight size="50%">
                    <TitleH2>
                    Random character for today! <br/>
                    Do you want to get to know him better?
                    </TitleH2>
                    <RandomCharRightTitle2>
                    Or choose another one
                    </RandomCharRightTitle2>
                    <RandomCharLeftBtn size="md" colorBG="red">
                        <span>try it</span>
                    </RandomCharLeftBtn>
                </RandomCharRight>
            </Row>
        </RandomCharInner>
    )
}

export default RandomChar;