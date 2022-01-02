import styled from "styled-components";
import { Container, Row, Text, TitleH3 } from "../all/all";
import ComicsBanner from "../comicsBanner/comicsBanner";
import thumbnail from "../randomChar/thumbnail.png"

const CharArtilceInner = styled.section`
    margin-top: 50px;
`

const CharArticleImgCol = styled.div`
    flex: 0 1 26.666%;
`;

const CharArticleImg = styled.img`
    max-width: 293px;
    max-height: 293px;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const CharArticleContentCol = styled.div`
    flex: 0 1 68.444%;
`

const CharArticleTitle = styled(TitleH3)`
    text-transform: uppercase;
    color: #000;
    margin-bottom: 28px;
`

const CharArticleText = styled(Text)`
    max-width: 550px;
    width: 100%;
`

export default function CharArtilce() {
    return (
        <>
            <ComicsBanner></ComicsBanner>
            <CharArtilceInner>
                <Container>
                    <Row wrap={"wrap"} justifyContent="space-between" >
                        <CharArticleImgCol>
                            <CharArticleImg src={thumbnail} />
                        </CharArticleImgCol>
                        <CharArticleContentCol>
                            <CharArticleTitle>
                                loki
                            </CharArticleTitle>
                            <CharArticleText color="#000">
                            In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
                            </CharArticleText>
                        </CharArticleContentCol>
                    </Row>
                </Container>
            </CharArtilceInner>
        </>
    )
}