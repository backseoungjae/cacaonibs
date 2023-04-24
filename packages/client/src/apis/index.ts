import axios from "axios";

export interface MakeChatRoomRequest {
  opponentId: string;
}

export interface User {
  username: string;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

// 채팅 목록
export const fetchChatMessageList = (roomId: string) =>
  axiosInstance.get(`/chat/${roomId}`);

// 채팅 보내기
export const sendChatMessage = (roomId: string, content: string) =>
  axiosInstance.post(`/chat/${roomId}`, { content });

// 채팅방 가져오기
export const fetchChatRoomList = () => axiosInstance.get("/room");

// 채티방 상세
export const fetchChatRoomDetail = (roomId: string) =>
  axiosInstance.get(`/room/${roomId}`);

// 채팅방 만들기
export const makeChatRoom = (body: MakeChatRoomRequest) =>
  axiosInstance.post(`/room`, body);

// 유저 목록
export const fetchUserList = () => axiosInstance.get(`/user`);

// 프로필
export const fetchMyProfile = () => axiosInstance.get("/user/me");

// 로그인
export const login = (body: string) => axiosInstance.post("/user/login", body);

// 로그아웃
export const logout = () => axiosInstance.post("/user/logout");
