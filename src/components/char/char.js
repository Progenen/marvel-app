import styled from "styled-components"
import CatalogChar from "../catalogChars/catalogChars"
import RandomChar from "../randomChar/randomChar"
import { Container } from "../all/all";
import charBg from "../../images/bgChar.png"


const CharInner = styled.div`
    background-image: url(${charBg});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: right bottom;
`

export default function Char () {
    return (
        <CharInner>
            <Container>
                <RandomChar></RandomChar>
                <CatalogChar></CatalogChar>
            </Container>
        </CharInner>
    )
}