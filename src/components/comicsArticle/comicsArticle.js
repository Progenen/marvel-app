import styled from "styled-components";
import { Container, ImgFull, Row } from "../all/all";
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

export default function ComicsArticle () {
    return (
        <>
            <ComicsBanner/>
            <Container>
                
            <ComicsArticleInner>
                <Row justifyContet={"space-betnween"} wrap={"wrap"}>
                    <ComicsArticleImgCol>
                        <ComicsArticleImg src={comicsPlaceholder} maxHeight="450px" />
                    </ComicsArticleImgCol>
                </Row>
            </ComicsArticleInner>
            </Container>
        </>
    )
}