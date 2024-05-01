// usestate : 상태 업데이트
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Info1Svg from '../assets/info1.svg';
import Info2Svg from '../assets/info2.svg';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import { useAuth } from '../contexts/AuthContext';
import PDFUpload from '../components/PDFUpload';
import Header from '../components/Header';
import ExamNumberInput from '../components/ExamNumberInput';
import { Switch } from 'antd';
import ProgressViewer from '../components/ProgressViewer';
import CreateExam from '../components/CreateExam';
import jsonData from '../chatgpt_json.json';
import axios from 'axios';
import { usePDF } from 'react-to-pdf';
import PromptInput from '../components/PromptModal';
import PromptModal from '../components/PromptModal';

const DataUpload = () => {
    const navigate = useNavigate();
    const { user, logout, login } = useAuth();
    const [data, setData] = useState(null);
    // 객관식 문제
    const [multipleChoice, setMultipleChoice] = useState(true);
    // 주관식 문제
    const [shortAnswer, setShortAnswer] = useState(true);
    // 서술형 문제
    const [essay, setEssay] = useState(true);
    // 문제 수
    const [examNumber, setExamNumber] = useState(10);
    // 문제 생성 설정
    const [prompt, setPrompt] = useState('');

    console.log('#######data', data);

    useEffect(() => {
        auth.onAuthStateChanged((usr) => {
            login(usr);

            if (!usr) {
                navigate('/login');
            }
        });

        // 로컬 스토리지에서 데이터 가져오기
        const localData = localStorage.getItem('examData');
        if (localData) {
            setData(JSON.parse(localData));
        }

        console.log('[user info]: ', user);
    }, [user]);

    return (
        <Wrapper>
            <Header />
            <MainWrapper>
                <DescriptionWrapper>
                    <UploadInfoContainer>
                        <h1>시험 문제 생성 설정</h1>
                        <SettingWrapper>
                            <SwitchWrapper>
                                객관식
                                <Switch
                                    defaultChecked
                                    onChange={() => {
                                        setMultipleChoice(!multipleChoice);
                                    }}
                                />
                            </SwitchWrapper>
                            <SwitchWrapper>
                                주관식
                                <Switch
                                    defaultChecked
                                    onChange={() => {
                                        setShortAnswer(!shortAnswer);
                                    }}
                                />
                            </SwitchWrapper>
                            <SwitchWrapper>
                                서술형
                                <Switch
                                    defaultChecked
                                    onChange={() => {
                                        setEssay(!essay);
                                    }}
                                />
                            </SwitchWrapper>
                            <SwitchWrapper>
                                생성할 문제 수
                                <ExamNumberInput
                                    min={1}
                                    max={20}
                                    defaultValue={10}
                                    onChange={(value) => {
                                        setExamNumber(value);
                                    }}
                                />
                            </SwitchWrapper>
                            <PromptModal
                                prompt={prompt}
                                setPrompt={setPrompt}
                            />
                        </SettingWrapper>
                    </UploadInfoContainer>
                </DescriptionWrapper>
                {/*
                    데이터가 없으면 PDF 업로드 컴포넌트를 보여줍니다.
                 */}
                {!data && (
                    <PDFUpload
                        examData={data}
                        setExamData={setData}
                        multipleChoice={multipleChoice}
                        setMultipleChoice={setMultipleChoice}
                        shortAnswer={shortAnswer}
                        setShortAnswer={setShortAnswer}
                        essay={essay}
                        setEssay={setEssay}
                        examNumber={examNumber}
                        setExamNumber={setExamNumber}
                        prompt={prompt}
                    />
                )}
                {/* <ProgressViewer /> */}
                {data && (
                    <GeneratePDFBtn
                        onClick={() => {
                            setData(null);
                            localStorage.removeItem('examData');
                            // refresh
                            window.location.reload();
                        }}
                    >
                        문제 새로 생성하기
                    </GeneratePDFBtn>
                )}

                <CreateExam data={data} />
            </MainWrapper>
        </Wrapper>
    );
};

export default DataUpload;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 20px;
    /* justify-content: center; */

    height: calc(100vh - 80px);
    align-items: center;
`;

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin-bottom: 40px;
`;

const UploadInfoContainer = styled.div`
    width: 698px;
    height: 200px;
    border-radius: 20px;
    border: 0.5px solid gray;
    padding: 20px;
`;

const SettingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    justify-content: center;
    align-items: center;
`;

const SwitchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

const GeneratePDFBtn = styled.button`
    width: 50%;
    height: 100%;
    font-size: 24px;
    color: #ab41ff;
    text-decoration: none;
    cursor: pointer;
    border: none;
    background-color: white;
    margin-top: 20px;
    &:hover {
        color: #ff6b6b;
    }
`;

const DownloadBtn = styled.button`
    width: 50%;
    height: 100%;
    font-size: 24px;
    color: #ab41ff;
    text-decoration: none;
    cursor: pointer;
    border: none;
    background-color: white;
    margin-top: 20px;
    &:hover {
        color: #ff6b6b;
    }
`;
