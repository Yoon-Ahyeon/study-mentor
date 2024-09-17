import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import { auth } from '../services/firebase';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { user, login, logout } = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeaderWrapper>
            <TitleWrapper onClick={() => (window.location.href = '/')}>
                <LogoSvgWrapper src={logo2} alt='logo' />
                <Title>Study Mentor</Title>
            </TitleWrapper>

            <MenuIcon onClick={toggleMenu}>
                <div />
                <div />
                <div />
            </MenuIcon>

            <NavLinksOverlay isOpen={isOpen} onClick={toggleMenu} />

            <NavLinks isOpen={isOpen}>
                <StyledNavLink
                    to='/upload'
                    activeClassName='active'
                    onClick={toggleMenu}
                >
                    파일 업로드
                </StyledNavLink>
                <StyledNavLink
                    to='/chatbot'
                    activeClassName='active'
                    onClick={toggleMenu}
                >
                    챗봇
                </StyledNavLink>
                <StyledNavLink
                    to='/checklist'
                    activeClassName='active'
                    onClick={toggleMenu}
                >
                    오답목록
                </StyledNavLink>
                <StyledNavLink
                    to='/guestbook'
                    activeClassName='active'
                    onClick={toggleMenu}
                >
                    방명록
                </StyledNavLink>
                <Logout
                    onClick={() => {
                        auth.signOut();
                        logout();
                        window.location.href = '/login';
                    }}
                >
                    로그아웃
                </Logout>
            </NavLinks>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 80px;
    border-bottom: 1px solid #e0e0e0;
    background-color: white;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 0 15px;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
`;

const LogoSvgWrapper = styled.img`
    width: 60px;
`;

const Title = styled.div`
    color: #fd9f28;
    font-size: 40px;
    font-weight: 900;
    line-height: normal;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const MenuIcon = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 24px;
    cursor: pointer;

    div {
        width: 100%;
        height: 3px;
        background-color: black;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

const NavLinksOverlay = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 50px;

    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 75%;
        max-width: 300px;
        height: 100%;
        background-color: white;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        padding: 100px 20px;
        box-sizing: border-box;
        z-index: 20;
        transform: ${({ isOpen }) =>
            isOpen ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 0.3s ease-in-out;
    }
`;

const StyledNavLink = styled(NavLink)`
    font-size: 24px;
    color: black;
    text-decoration: none;
    font-weight: 600;

    &.active {
        color: #6392ff; /* Change to desired active color */
    }

    &:hover {
        color: #6392ff; /* Change to desired hover color */
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const Logout = styled.div`
    font-size: 24px;
    color: black;
    cursor: pointer;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;
