import React from "react";
import styled from "@emotion/styled";
import { IRoom } from "../types";
import TopNavigation from "../components/TopNavigation";
import BottomNavigation from "../components/BottomNavigation";
import ChatRoomList from "../components/ChatRoomList";
import ChatRoom from "../components/ChatRoomList/ChatRoom";
import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import * as api from "../apis";

const Base = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 12px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function RoomList() {
  const data = useQuery<AxiosResponse<Array<IRoom>>, AxiosError>(
    "fetchChatRoomList",
    api.fetchChatRoomList
  );

  return (
    <Base>
      <Container>
        <TopNavigation title="채팅" />
        {data && (
          <ChatRoomList>
            {data?.data?.data.map((chatRoom) => (
              <ChatRoom
                key={chatRoom?.id}
                id={chatRoom?.id}
                username={chatRoom?.user?.username}
              />
            ))}
          </ChatRoomList>
        )}
        <BottomNavigation />
      </Container>
    </Base>
  );
}
