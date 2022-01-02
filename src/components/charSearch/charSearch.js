import styled from "styled-components";
import { Button, Input } from "../all/all";
import { CharSearchInnerForm, CatalogCharInfoTitle } from "../catalogChars/catalogChars";

const CharSearchForm = styled.form`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

const CharSearchFormBtn = styled(Button)`
    margin-top: 10px;
    &:first-child {
        margin-top: 0;
    }

`

const CharSearchInputWrapper = styled.div`
    flex: 0 1 250px;
`

export default function CharSearch() {
    return (
        <CharSearchInnerForm>
            <CatalogCharInfoTitle>
                Or find a character by name:
            </CatalogCharInfoTitle>
            <CharSearchForm>
                <CharSearchInputWrapper>
                    <Input id="name" placeholder="Enter name" size="250px"></Input>
                </CharSearchInputWrapper>
                <div>
                    <CharSearchFormBtn size="md" colorBG="red"><span>find</span></CharSearchFormBtn>
                </div>
            </CharSearchForm>
        </CharSearchInnerForm>
    )
}