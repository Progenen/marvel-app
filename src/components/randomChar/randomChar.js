import styled from 'styled-components';
import { Button, Col, colorModBlack, Row, TitleH2, TitleH3 } from '../all/all';
import randomCharRightBg from '../../images/molot_shield.png';
import { Component } from 'react';
import MarvelService from '../../services/marvelService';

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

class RandomChar extends Component {

    state = {
        name: null,
        description: null,
        thumbnail: null,
        homepage: null,
        wiki: null
    }

    service = new MarvelService();

    updateChar = () => {
        // const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        const id = 2
        this.service.getCharacterById(id)
            .then(res => {
                this.setState(res)
            })
    }

    componentDidMount = () => {
        this.updateChar();
    }

    render() {

        const { name, description, thumbnail, homepage, wiki } = this.state;

        return (
            <RandomCharInner>
                <Row>
                    <RandomCharleft size="50%">
                        <RandomCharLeftImg src={thumbnail} />
                        <RandomCharLeftInfo>
                            <TitleH3>
                                {name}
                            </TitleH3>
                            <RandomChartLeftText>
                                {description}
                            </RandomChartLeftText>
                            <RandomCharLeftUi>
                                <RandomCharLeftBtn href={homepage} size="md" colorBG="red">
                                    <span>HOMEPAGE</span>
                                </RandomCharLeftBtn>
                                <RandomCharLeftBtn href={wiki} size="md" colorBG="gray">
                                    <span>WIKI</span>
                                </RandomCharLeftBtn>
                            </RandomCharLeftUi>
                        </RandomCharLeftInfo>
                    </RandomCharleft>
                    <RandomCharRight size="50%">
                        <TitleH2>
                            Random character for today! <br />
                            Do you want to get to know him better?
                        </TitleH2>
                        <RandomCharRightTitle2>
                            Or choose another one
                        </RandomCharRightTitle2>
                        <RandomCharLeftBtn onClick={() => {this.updateChar()}} size="md" colorBG="red">
                            <span>try it</span>
                        </RandomCharLeftBtn>
                    </RandomCharRight>
                </Row>
            </RandomCharInner>
        )
    }
}

export default RandomChar;