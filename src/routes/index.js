import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/post";

export default function ApplicationRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
