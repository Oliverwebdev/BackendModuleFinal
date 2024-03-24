import React from "react";
import styled from "styled-components";
import MessageItem from "./MessageItem";

const MessageListContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function MessageList({ messages = [] }) {
  // Standardwert als leeres Array setzen
  return (
    <MessageListContainer>
      {messages.map((msg, index) => (
        <MessageItem key={index} {...msg} />
      ))}
    </MessageListContainer>
  );
}

export default MessageList;
