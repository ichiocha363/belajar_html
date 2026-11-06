import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthToggle from "../components/AuthToggle";
import type { FormEvent } from "react";
import Toast from "../components/Toast";
import "../form.css";
 
type InfoToast = { teks: string; jenis: "sukses" | "gagal" };
type FormErrors = { email?: string; password?: string };
const AKUN_DEMO = { email: "safaralpin@gmail.com", password: "12345678" };
export default function HalamanLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pesan, setPesan] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState<InfoToast | null>(null);
  const navigate = useNavigate();
 
function tampilkanToast(teks: string, jenis: "sukses" | "gagal") {
  setToast({ teks, jenis });
  setTimeout(() => setToast(null), 3000);
}

  function handleMasuk(e: FormEvent) {
    e.preventDefault();
    setPesan(`Mencoba masuk sebagai ${email}`);
  }

  function validate(): FormErrors {
  const errs: FormErrors = {};
  if (email === "") errs.email = "Email wajib diisi";
  else if (!email.includes("@")) errs.email = "Format email salah";
  if (password === "") errs.password = "Password wajib diisi";
  else if (password.length < 8) errs.password = "Minimal 8 karakter";
  return errs;
}

function handleSubmit(e: FormEvent) {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);
  // Hentikan proses jika ada error
  if (Object.keys(validationErrors).length > 0) return;
  console.log("Validation passed! Siap kirim data ke API.");
  if (email === AKUN_DEMO.email && password === AKUN_DEMO.password) {
      tampilkanToast("Berhasil masuk. Selamat datang!", "sukses");
        navigate("/dasbor");
    } else {
      tampilkanToast("Email atau password salah", "gagal");
    }
}

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Masuk Ke Dasbor</h1>
      <h4>Kelola transaksi, stok bahan dapur, dan pantau perfoma usaha</h4>
      <div className="container">
    <AuthToggle />
  </div>
      <label htmlFor="email">Email</label>
      <input
      className={errors.email ? "error" : "input"}
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <small className="error-message">{errors.email}</small>}
      <label htmlFor="password">Password</label>
      <div className="password-row">
      <input
        id="password"
        className={errors.password ? "error" : "input"}
        type={showPassword? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button
        type="button" onClick= {() => setShowPassword(!showPassword)}>
        </button>
      </div>
      {errors.password && (
        <small className="error-message">{errors.password}</small>
      )}
      <button type="submit">Masuk</button>
      {pesan && <p>{pesan}</p>}
      {toast && <Toast teks={toast.teks} jenis={toast.jenis} />}
    </form>
  );
}