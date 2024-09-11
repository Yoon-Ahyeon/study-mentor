import { useContext, useEffect, useState } from 'react';
import Header from '../components/Header'; 
import CheckList from '../components/CheckList'
import InfoFooter from '../components/InfoFooter'

import styled from 'styled-components';

const CheckListPage = () => {

    return (
        <>
            <Wrapper>
                <Header />
                <Content>
                    <InfoContainer>
                        <InfoBox>
                            <h3>🔶 이 페이지는 앞서 풀어본 문제에 대한 목록입니다.</h3>
                            <TextCustom>다시 한 번 풀어보면서, 시험 내용을 복기해보세요.</TextCustom>        
                            <TextCustom style={{color: "red",}}>※ 채점 기능은 따로 제공하지 않습니다.</TextCustom>      
                        </InfoBox>
                    </InfoContainer>
                    <ListContainer>
                        <CheckList />
                    </ListContainer>
                </Content>
                <InfoFooter />
            </Wrapper>
        </>
    );
}

export default CheckListPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
`;

const Content = styled.div`
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;
`;

const InfoBox = styled.div` 
    width: 750px;
    padding: 30px;
    background: #B8E9FF;
    border-radius: 12px;
`; 

const TextCustom = styled.p`
    font-size: 18px;
    margin-top: 10px;
`;

const ListContainer = styled.div`
    display: flex;
    justify-content: center;
`;
