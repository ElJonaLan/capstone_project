import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Character from "../pages/Character/Character";
import Characters from "../pages/Characters/Characters";
import Houses from "../pages/Houses/Houses";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Characters" element={<Characters />} />
        <Route path="Characters/:id" element={<Character />} />
        <Route path="Houses" element={<Houses />} />
        <Route path="*" element={<Navigate to={"Home"} />} />
      </Routes>
    </>
  );
}

export default AppRoute;
