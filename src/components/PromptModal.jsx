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
                스타일 설정
            </StyleButton>
            <Modal
                title={<span style={{ fontSize: '24px' }}>시험문제 스타일 설정하기</span>}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={800}
                wrapClassName="custom-modal-center"
                style={{
                    top: '10%',
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

// const StyleButton = styled.button`
//     padding: 7px 12px;
//     border-radius: 5px;
//     border: 3px #58CCFF solid;
//     font-size: 16px;
//     font-family: 'pretendard-Regular';
//     // font-weight: bold;
//     color: black;
//     background: #B8E9FF;
//     &:hover {
//         background-color: #1187cf;
//     }
// `;

const StyleButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    font-family: 'Pretendard-Regular';
    border: 2px solid #2FA599;
    border-radius: 5px;
    background-color: white;

    &:hover,
    &:active {
        background-color: #2FA599; 
        color: white;
    }
`;
