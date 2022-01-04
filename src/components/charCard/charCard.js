import styled from "styled-components";
import { colorModBlack, colorRed, TitleH2 } from "../all/all";

const CatalogCharCard = styled.div`
    max-width: 200px;
    height: 318px;
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
    height: 200px;
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
// eslint-disable-next-line
const CatalogCharInfoFormError = styled.div`
    font-weight: 700;
    color: ${colorRed};
    font-size: 18px;
    line-height: 21px;
    margin-top: 25px;
`

export default function CharCard (props) {
    return (
        <CatalogCharCard active={props.active}>
            <CatalogCharCardHeader>
                <CatalogCharCardImg src={props.img} />
            </CatalogCharCardHeader>
            <CatalogCharCardBody>
                <TitleH2>{props.name}</TitleH2>
            </CatalogCharCardBody>
        </CatalogCharCard>
    )
}