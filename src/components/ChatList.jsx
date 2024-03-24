import React from "react";
import ChatListItem from "./ChatListItem";
import styled from "styled-components";

const ChatListContainer = styled.div`
  flex: 0.35;
  overflow: scroll;
`;

function ChatList({ selectChat, activeChat }) {
  const chats = ["Chat 1", "Chat 2", "Chat 3"]; // Dummy-Daten

  return (
    <ChatListContainer>
      {chats.map((chat, index) => (
        <ChatListItem
          key={index}
          name={chat}
          onSelect={() => selectChat(chat)}
          isactive={chat === activeChat}
        />
      ))}
    </ChatListContainer>
  );
}

export default ChatList;
