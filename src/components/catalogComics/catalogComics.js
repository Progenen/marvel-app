import styled from "styled-components";
import { Button, Container, Row } from "../all/all";
import comicsPlaceholder from "../../images/comicsPlaceholder.png"
import ComicsBanner from "../comicsBanner/comicsBanner";
import ComicsCard from "../comicsCard/comicsCard";

const CatalogComicsInner = styled.section`
    padding: 50px 0;
`;

const CatalogComicsRow = styled(Row)`
    margin: 0 -28.5px;
    flex-wrap: wrap;
`

const CatalogComicsBtn = styled(Button)`
    margin: -10px auto 0 auto;
`


export default function CatalogComics() {
    return (
        <>
            <ComicsBanner />
            <CatalogComicsInner>
                <Container>
                    <CatalogComicsRow>
                        <ComicsCard img={comicsPlaceholder} price={false} name={"ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB"} />
                    </CatalogComicsRow>
                    <CatalogComicsBtn size="big" colorBG="red"><span>load more</span></CatalogComicsBtn>
                </Container>
            </CatalogComicsInner>
        </>
    )
}