import React from 'react';
import styled from 'styled-components';

const MessageItemContainer = styled.div`
  max-width: 60%;
  align-self: ${props => props.isSender ? 'flex-end' : 'flex-start'};
  background-color: ${props => props.isSender ? '#daf8cb' : '#ffffff'};
  padding: 8px 10px;
  border-radius: 10px;
  margin: 2px 0;
`;

const MessageText = styled.p`
  margin: 0;
  word-wrap: break-word;
`;

function MessageItem({ text, isSender }) {
  return (
    <MessageItemContainer isSender={isSender}>
      <MessageText>{text}</MessageText>
    </MessageItemContainer>
  );
}

export default MessageItem;
