import { NavComponent } from "../components/NavComponent";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

export const MainApp = () => {
  return (
    <>
      <NavComponent />
      <h1> MainApp</h1>
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  );
};
