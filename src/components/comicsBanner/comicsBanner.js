import styled from "styled-components";
import { colorModBlack, Container, Row, TitleH2 } from "../all/all";
import avengers from "../../images/comicsBannerAvengers.png";
import avengersLogo from "../../images/comicsBannerAvengersLogo.png";


const ComicsBannerInner = styled.section`
    background-color: ${colorModBlack};
    position: relative;
`;

const ComicsBannerContainer = styled(Container)`
    max-width: 540px;
    padding: 18px 0 30px;
`;

const ComicsBannerAvengers = styled.img`
    width: 100%;
    max-width: 152px;   
    margin: 0 0 0 45px;
`

const ComicsBannerAvengersLogo = styled.img`
    width: 100%;
    max-width: 132px;   
    margin: 0 19px 0 0;
`

export default function ComicsBanner() {
    return (
        <Container>
            <ComicsBannerInner>
                <Row>
                    <ComicsBannerAvengers src={avengers} />
                    <ComicsBannerContainer>
                        <TitleH2 color="#fff">
                            New comics every week!<br />
                            Stay tuned!
                        </TitleH2>
                    </ComicsBannerContainer>
                    <ComicsBannerAvengersLogo src={avengersLogo} />
                </Row>
            </ComicsBannerInner>
        </Container>
    )
}