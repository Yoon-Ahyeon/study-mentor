import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import PromptInput from './PromptInput';
import styled from 'styled-components';

const PromptModal = ({
    prompt,
    setPrompt,
    imagePrompt,
    setImagePrompt,
    isTextCentered,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        console.log(prompt);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <StyleButton 
                type='primary'
                onClick={showModal}
            >
                시험문제 스타일 설정 하기
            </StyleButton>
            <Modal
                title='시험문제 스타일 설정하기'
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={800}
                style={{
                    fontFamily: 'Pretendard-Regular'
                }}
            >
                <PromptInput
                    prompt={prompt}
                    setPrompt={setPrompt}
                    imagePrompt={imagePrompt}
                    setImagePrompt={setImagePrompt}
                    isTextCentered={isTextCentered}
                />
            </Modal>
        </>
    );
};
export default PromptModal;

const StyleButton = styled.button`
    margin-top: 5px;
    padding: 7px 10px;

    border-radius: 5px;
    border: 3px #58CCFF dotted;

    font-size: 15px;
    font-family: 'pretendard-Regular';

    color: white;
    background: #18A8F1;

    &:hover {
        background-color: #1187CF; 
    }
`;