import styled from "styled-components";
import comicsBannerBg from '../../images/comicsBannerBg.png';
import { colorModBlack, TitleH2 } from "../all/all";


const ComicsBannerInner = styled.section`
    background-image: url(${comicsBannerBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${colorModBlack};
    padding: 18px 0 26px;
`;

export default function ComicsBanner () {
    return (
        <ComicsBannerInner>
            <TitleH2 color="#fff">
            New comics every week!<br>
            Stay tuned!
            </TitleH2>
        </ComicsBannerInner>
    )
}