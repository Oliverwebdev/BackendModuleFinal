import React from "react";
import styled from "styled-components";
import MessageList from "./MessageList";
import InputArea from "./InputArea";

const ChatWindowContainer = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ChatHeader = styled.div`
  padding: 10px;
  background-color: #ededed;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
`;

// Der Rest des Stylings bleibt unverändert

function ChatWindow({ chat }) {
  return (
    <ChatWindowContainer>
      <ChatHeader>{chat ? chat.name : "Kein Chat ausgewählt"}</ChatHeader>
      <MessageList messages={chat ? chat.messages : []} />
      <InputArea />
    </ChatWindowContainer>
  );
}

export default ChatWindow;
