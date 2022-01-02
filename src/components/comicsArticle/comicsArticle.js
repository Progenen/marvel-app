import styled from "styled-components";
import { colorRed, Container, ImgFull, Row, Text, TitleH3, TitleH2 } from "../all/all";
import ComicsBanner from "../comicsBanner/comicsBanner";
import comicsPlaceholder from "../../images/comicsPlaceholder.png"

const ComicsArticleInner = styled.section`
    padding: 50px 0;
`;

const ComicsArticleImgCol = styled.div`
    flex: 0 1 26.666%;
`;

const ComicsArticleImg = styled(ImgFull)`
    min-height: 160px;
`;

const ComicsArticleContentCol = styled.div`
    flex: 0 1 68.444%;
`;

const ComicsArticleContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
`

const ComicsArticleBack = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: 700;
`

const ComicsArticleContentText = styled(Text)`
    color: #000;
    max-width: 550px;
    width: 100%;
`

const ComicsArticlePages = styled(Text)`
    color: #000;
    margin: 40px 0 25px 0;
`

const ComicsArticleLang = styled(Text)`
    color: #000;`

const ComicsArticlePrice = styled(TitleH2)`
    color: ${colorRed};
    margin-top: 25px;

`

export default function ComicsArticle() {
    return (
        <>
            <ComicsBanner />
            <Container>

                <ComicsArticleInner>
                    <Row justifyContent={"space-between"} wrap={"wrap"}>
                        <ComicsArticleImgCol>
                            <ComicsArticleImg src={comicsPlaceholder} maxHeight="450px" />
                        </ComicsArticleImgCol>
                        <ComicsArticleContentCol>
                            <ComicsArticleContentHeader>
                                <TitleH3 color={"#000"}>
                                    X-Men: Days of Future Past
                                </TitleH3>
                                <ComicsArticleBack>
                                    Back to all
                                </ComicsArticleBack>
                            </ComicsArticleContentHeader>
                            <ComicsArticleContentText color="#000">
                                Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
                            </ComicsArticleContentText>
                            <ComicsArticlePages>
                                144 pages
                            </ComicsArticlePages>
                            <ComicsArticleLang>
                                Language: en-us
                            </ComicsArticleLang>
                            <ComicsArticlePrice>
                                9.99$
                            </ComicsArticlePrice>
                        </ComicsArticleContentCol>
                    </Row>
                </ComicsArticleInner>
            </Container>
        </>
    )
}