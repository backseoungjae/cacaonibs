import React from "react";
import { Routes, Route } from "react-router-dom";
import Friends from "./pages/Friends";
import Lobby from "./pages/Lobby";
import RoomDetail from "./pages/RoomDetail";
import RoomList from "./pages/RoomList";
import SeeMore from "./pages/SeeMore";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Lobby />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/rooms" element={<RoomList />} />
      <Route path="/rooms/:roomId" element={<RoomDetail />} />
      <Route path="/more" element={<SeeMore />} />
    </Routes>
  );
}

export default App;
