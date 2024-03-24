import React, { useState } from 'react';
import styled from 'styled-components';

const InputAreaContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #f0f0f0;
  align-items: center;
`;

const TextInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 10px 15px;
  background-color: #00bfa5;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #00a685;
  }
`;

function InputArea({ sendMessage }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    sendMessage(message);
    setMessage('');
  };

  return (
    <InputAreaContainer>
      <TextInput
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Nachricht schreiben..."
      />
      <SendButton onClick={handleSend}>Senden</SendButton>
    </InputAreaContainer>
  );
}

export default InputArea;
