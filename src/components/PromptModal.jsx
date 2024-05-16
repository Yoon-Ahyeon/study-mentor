import React, { useState } from 'react';
import { Modal } from 'antd';
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
        // console.log(prompt);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <StyleButton type='primary' onClick={showModal}>
                시험문제 스타일 설정하기
            </StyleButton>
            <Modal
                title='시험문제 스타일 설정하기'
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={800}
                style={{
                    fontFamily: 'Pretendard-Regular',
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
    padding: 7px 12px;

    border-radius: 5px;
    border: 3px #18a8f1 solid;

    font-size: 16px;
    font-family: 'pretendard-Regular';

    color: white;
    background: #18a8f1;

    &:hover {
        background-color: #1187cf;
    }
`;
