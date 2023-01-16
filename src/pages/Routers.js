import { Route, Routes } from "react-router-dom";

import React from "react";
import Home from "./Home/Home";
import IntroEvent from "./IntroEvent/IntroEvent";
import CreateRollingPaper from "./CreateRollingPaper/CreateRollingPaper";

// 라우터만 모이는 곳 (차후에 관리하기 편하도록 여기 다 때려박으면됨)

// 경로는 차후에 api설계 완료 시 바뀔 예정!!!! (임시)
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="event" element={<IntroEvent />} />
      <Route path="rollingpaper" element={<CreateRollingPaper />} />
    </Routes>
  );
}
