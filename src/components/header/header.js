import styled from 'styled-components';
import { colorRed, Container, Row } from '../all/all';


const HeaderCol = styled.div`
    flex: 0 1 50%;
`;

const HeaderInner = styled.header`
    padding: 50px 0;
`;

const HeaderLogo = styled.div`
    font-weight: bold;
    font-size: 28px;
    span {
        color: ${colorRed}
    }
`;

const HeaderMenu = styled.nav`
    display: flex;
    justify-content: flex-end;
`;

const HeaderMenuList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const HeaderMenuItem = styled.li`
    margin-right: 8px;
    padding-right: 16px;
    font-size: 24px;
    font-weight: 700;
    position: relative;
    cursor: pointer;
    color: ${props => props.active ? colorRed : '#000'};
    &::after {
        content: '/';
        position: absolute;
        color: #000;
        right: 0;
    }
    &:last-child {
        padding-right: 0;
        margin-right: 0;
    }
    &:last-child::after {
        display: none;
    }
`;

function Header() {
    return (
        <HeaderInner>
            <Container>
                <Row justifyContent="space-between" alignItems="center">
                    <HeaderCol>
                        <HeaderLogo>
                            <span>Marvel</span> information portal
                        </HeaderLogo>
                    </HeaderCol>
                    <HeaderCol>
                        <HeaderMenu>
                            <HeaderMenuList>
                                <HeaderMenuItem active={true}>
                                    Characters
                                </HeaderMenuItem>
                                <HeaderMenuItem active={false}>
                                    Comics
                                </HeaderMenuItem>
                            </HeaderMenuList>
                        </HeaderMenu>
                    </HeaderCol>
                </Row>
            </Container>
        </HeaderInner>
    )
}

export default Header;