import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header'; 
import InfoFooter from '../components/InfoFooter'
import WriteGuestBook from '../components/WriteGuestBook';
import ReadGuestBook from '../components/ReadGuestBook';

import styled from 'styled-components';

const CheckListPage = () => {

    const [showWriteGuestBook, setShowWriteGuestBook] = useState(false);

    const handleButtonClick = () => {
        setShowWriteGuestBook(prev => !prev);
    };

    return (
        <Wrapper>
            <Header />
            <InfoContainer>
                <InfoBox>
                    <InfoText>🌏 방명록</InfoText>
                    <TextCustom>하고 싶은 이야기를 마음껏 남겨보세요! <br />※ 내용에 따라 검열의 대상이 될 수도 있습니다.</TextCustom>          
                </InfoBox>
            </InfoContainer>
            <WriteContainer>
                <h2 style={{margin: "20px 0px 30px 0px"}}>👣 방명록 작성하기</h2>
                <p style = {{fontSize: "20px", marginBottom: "20px"}}>아래의 버튼을 눌러 방명록을 작성해주세요.</p>
                <WriteButton onClick={handleButtonClick}>
                    {showWriteGuestBook ? '방명록 작성 취소' : '방명록 작성하러 가기'}
                </WriteButton>
                {showWriteGuestBook && <WriteGuestBook />}
            </WriteContainer>
            <DivisionLine />
            <ReadContainer>
                <ReadGuestBook />
            </ReadContainer>
            <InfoFooter />
        </Wrapper>
    );
}

export default CheckListPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;

    @media (max-width: 768px) {
        margin: 20px;
    }
`;


const InfoBox = styled.div` 
    width: 770px;
    padding: 30px;
    background: #FFE4FA;
    border-radius: 12px;

    @media (max-width: 768px) {
        width: 90%;
        padding: 20px;
    }
`; 

const InfoText = styled.h3`
    font-size: 24px; 

    @media (max-width: 768px) {
        font-size: 16px; 
    }
`;

const TextCustom = styled.p`
    font-size: 18px;
    margin-top: 10px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const WriteContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
`;

const WriteButton = styled.button`
    border: none;
    border-radius: 10px;
    margin-bottom: 20px;
    width: 820px;
    height: 50px;
    font-size: 20px;
    font-family: "Pretendard-Regular";
    background-color: #B8E6E1;
    color: #333; 

    &:hover {
        background-color: #82CBC4;
    }

    @media (max-width: 768px) {
        width: 90%;
        font-size: 18px;
        height: 45px;
    }
`;

const ReadContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 10px; 
    box-sizing: border-box; 

    @media (max-width: 768px) {
        padding: 0; 
    }
`;


const DivisionLine = styled.div`
    border-top: 2px dashed #444444;
    margin: 40px auto;
    width: 700px;
    height: 0px;
    
    &:after {
        content: "◆";
        position: relative;
        top: -9px;
        left: calc(50%, 7px);
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`;