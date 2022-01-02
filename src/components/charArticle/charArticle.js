import styled from "styled-components";
import { Container, Row } from "../all/all";
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
                        Content
                    </CharArticleContentCol>
                </Row>
                </Container>
            </CharArtilceInner>
        </>
    )
}