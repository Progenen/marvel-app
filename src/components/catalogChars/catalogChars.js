import styled from "styled-components"
import { Button, Col, colorModBlack, colorRed, Input, Row, TitleH2 } from "../all/all"
import cardThumbnail from "../../images/char.jpg";
import loader from "../../images/loaderChar.png";
const CatalogCharInner = styled.section`
    padding: 50px 0;
`;

const CatalogCharList = styled(Col)`
    flex: 0 1 62.444%;
    margin: -15px -12.5px 0;
    flex-wrap: wrap;
    display: flex;
    button {
        margin: 30px auto 0 auto;
    }
`;

const CatalogCharInfo = styled(Col)`
    flex: 0 1 38.555%;
    margin-left: 5px;
`;

const CatalogCharCard = styled.div`
    min-width: 200px;
    min-height: 318px;
    display: block;
    margin: 15px 12.5px 15px 12.5px;
    background-color: ${colorModBlack};
    filter: ${props => props.active ? 'drop-shadow(0px 5px 20px #9F0013)' : 'drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.25))'};
    ${props => props.active ? 'transform: translateY(-10px);' : ''}
    transition: .3s;
    cursor: pointer;
    &:hover {
        filter: drop-shadow(0px 5px 20px #9F0013);
        transform: translateY(-10px);
    }
`;

const CatalogCharCardHeader = styled.div`
    max-height: 200px;
    max-width: 200px;
`;

const CatalogCharCardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const CatalogCharCardBody = styled.div`
    padding: 15px;
`

const CatalogCharListBtn = styled(Button)`
    margin: auto;
`

const CatalogCharInfoInner = styled.div`
    padding: 25px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
`;

const CatalogCharInfoAvatar = styled.div`
    max-width: 150px;
    max-height: 150px;
    margin-right: 25px;
`;

const CatalogCharInfoAvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const CatalogCharInfoUi = styled(Row)`
    flex-direction: column;
    button {
        margin-top: 10px;
    }
`; 

const CatalogCharInfoName = styled(TitleH2)`
    height: 100%;
`

const CatalogCharInfoTitle = styled(TitleH2)`
    font-size: 18px;
    margin: 0px 0 13px 0;
    color: #000;
`

const CatalogCharInfoList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const CatalogCharInfoItem = styled.li`
    padding: 5px 10px;
    margin-bottom: 10px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:last-child {
        margin-bottom: 0;
    }
`

const CatalogCharInfoInnerForm = styled(CatalogCharInfoInner)`
    margin-top: 30px;
`

const CatalogCharInfoForm = styled.form`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    button {
        margin-top: 10px;
    }
    button:first-child {
        margin-top: 0;
    }
`

const CatalogCharInfoInputWrapper = styled.div`
    flex: 0 1 250px;
`
// eslint-disable-next-line
const CatalogCharInfoFormError = styled.div`
    font-weight: 700;
    color: ${colorRed};
    font-size: 18px;
    line-height: 21px;
    margin-top: 25px;
`

const LoaderImg = styled.img`
    width: 100%;
`

// eslint-disable-next-line
function CatalogCharInfoLoader () {
    return (
        <CatalogCharInfoInner>
            <CatalogCharInfoTitle cssStyle="text-align: center">Please select a character to see information</CatalogCharInfoTitle>
            <LoaderImg src={loader} />
        </CatalogCharInfoInner>
    )
}

export default function CatalogChar() {
    return (
        <CatalogCharInner>
            <Row justifyContent="space-between">
                <CatalogCharList>
                    <CatalogCharCard active={true}>
                        <CatalogCharCardHeader>
                            <CatalogCharCardImg src={cardThumbnail} />
                        </CatalogCharCardHeader>
                        <CatalogCharCardBody>
                            <TitleH2>ABYSS</TitleH2>
                        </CatalogCharCardBody>
                    </CatalogCharCard>
                    <CatalogCharCard>
                        <CatalogCharCardHeader>
                            <CatalogCharCardImg src={cardThumbnail} />
                        </CatalogCharCardHeader>
                        <CatalogCharCardBody>
                            <TitleH2>ABYSS</TitleH2>
                        </CatalogCharCardBody>
                    </CatalogCharCard>
                    <CatalogCharCard>
                        <CatalogCharCardHeader>
                            <CatalogCharCardImg src={cardThumbnail} />
                        </CatalogCharCardHeader>
                        <CatalogCharCardBody>
                            <TitleH2>ABYSS</TitleH2>
                        </CatalogCharCardBody>
                    </CatalogCharCard>
                    <CatalogCharCard>
                        <CatalogCharCardHeader>
                            <CatalogCharCardImg src={cardThumbnail} />
                        </CatalogCharCardHeader>
                        <CatalogCharCardBody>
                            <TitleH2>ABYSS</TitleH2>
                        </CatalogCharCardBody>
                    </CatalogCharCard>
                    <CatalogCharCard>
                        <CatalogCharCardHeader>
                            <CatalogCharCardImg src={cardThumbnail} />
                        </CatalogCharCardHeader>
                        <CatalogCharCardBody>
                            <TitleH2>ABYSS</TitleH2>
                        </CatalogCharCardBody>
                    </CatalogCharCard>
                    <CatalogCharCard>
                        <CatalogCharCardHeader>
                            <CatalogCharCardImg src={cardThumbnail} />
                        </CatalogCharCardHeader>
                        <CatalogCharCardBody>
                            <TitleH2>ABYSS</TitleH2>
                        </CatalogCharCardBody>
                    </CatalogCharCard>
                    <CatalogCharCard>
                        <CatalogCharCardHeader>
                            <CatalogCharCardImg src={cardThumbnail} />
                        </CatalogCharCardHeader>
                        <CatalogCharCardBody>
                            <TitleH2>ABYSS</TitleH2>
                        </CatalogCharCardBody>
                    </CatalogCharCard>
                    <CatalogCharCard>
                        <CatalogCharCardHeader>
                            <CatalogCharCardImg src={cardThumbnail} />
                        </CatalogCharCardHeader>
                        <CatalogCharCardBody>
                            <TitleH2>ABYSS</TitleH2>
                        </CatalogCharCardBody>
                    </CatalogCharCard>
                    <CatalogCharCard>
                        <CatalogCharCardHeader>
                            <CatalogCharCardImg src={cardThumbnail} />
                        </CatalogCharCardHeader>
                        <CatalogCharCardBody>
                            <TitleH2>ABYSS</TitleH2>
                        </CatalogCharCardBody>
                    </CatalogCharCard>
                    <CatalogCharListBtn size="big" colorBG="red">LOAD MORE</CatalogCharListBtn>
                </CatalogCharList>
                <CatalogCharInfo>
                    <CatalogCharInfoInner>
                        <Row alignItems="stretch">
                            <CatalogCharInfoAvatar>
                                <CatalogCharInfoAvatarImg src={cardThumbnail} />
                            </CatalogCharInfoAvatar>
                            <CatalogCharInfoUi>
                                <CatalogCharInfoName color="#000">ABYSS</CatalogCharInfoName>
                                <Button size="md" colorBG="red">HOMEPAGE</Button>
                                <Button size="md" colorBG="gray">WIKI</Button>
                            </CatalogCharInfoUi>
                        </Row>
                        <p>
                        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
                        </p>
                        <CatalogCharInfoTitle color="#000">
                            Comics:
                        </CatalogCharInfoTitle>
                        <CatalogCharInfoList>
                            <CatalogCharInfoItem>
                                All-Winners Squad: Band of Heroes (2011) #3
                            </CatalogCharInfoItem>
                            <CatalogCharInfoItem>
                                Alpha Flight (1983) #50
                            </CatalogCharInfoItem>
                            <CatalogCharInfoItem>
                                Amazing Spider-Man (1999) #503
                            </CatalogCharInfoItem>
                            <CatalogCharInfoItem>
                                Amazing Spider-Man (1999) #504
                            </CatalogCharInfoItem>
                            <CatalogCharInfoItem>
                            AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                            </CatalogCharInfoItem>
                            <CatalogCharInfoItem>
                            Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                            </CatalogCharInfoItem>
                            <CatalogCharInfoItem>
                            Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                            </CatalogCharInfoItem>
                            <CatalogCharInfoItem>
                            CatalogCharInfoSpecItem
                            </CatalogCharInfoItem>
                            <CatalogCharInfoItem>
                            Avengers (1963) #1
                            </CatalogCharInfoItem>
                            <CatalogCharInfoItem>
                            Avengers (1996) #1
                            </CatalogCharInfoItem>
                        </CatalogCharInfoList>
                    </CatalogCharInfoInner>
                    <CatalogCharInfoInnerForm>
                        <CatalogCharInfoTitle>
                        Or find a character by name:
                        </CatalogCharInfoTitle>
                        <CatalogCharInfoForm>
                            <CatalogCharInfoInputWrapper>
                                <Input id="name" placeholder="Enter name" size="250px"></Input>
                            </CatalogCharInfoInputWrapper>
                            <div>
                                <Button size="md" colorBG="red">find</Button>
                            </div>
                        </CatalogCharInfoForm>
                    </CatalogCharInfoInnerForm>
                </CatalogCharInfo>
            </Row>
        </CatalogCharInner>
    )
}