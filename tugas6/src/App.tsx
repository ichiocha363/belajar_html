import "./form.css";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import HalamanLogin from "./pages/HalamanLogin";
import HalamanRegister from "./pages/HalamanRegister";
import HalamanDasbor from "./pages/HalamanDasbor";
 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HalamanLogin />} />
        <Route path="/daftar" element={<HalamanRegister />} />
        <Route path="/dasbor" element={<HalamanDasbor />} />
      </Routes>
    </BrowserRouter>
  );
}
