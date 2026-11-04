import { useState } from "react";
import AuthToggle from "../components/AuthToggle";
import type { FormEvent } from "react";
import Toast from "../components/Toast";
import "../form.css";
 
type InfoToast = { teks: string; jenis: "sukses" | "gagal" };
type FormErrors = { 
namaLengkap?: string;
  namaUsaha?: string;
  jenisUsaha?: string;
  noWhatsapp?: string;
  email?: string;
  password?: string;
};
const AKUN_DEMO = { email: "safaralpin@gmail.com", password: "12345678" };
export default function HalamanRegister() {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [namaUsaha, setNamaUsaha] = useState("");
  const [jenisUsaha, setJenisUsaha] = useState("");
  const [noWhatsapp, setNoWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState<InfoToast | null>(null);
 
function tampilkanToast(teks: string, jenis: "sukses" | "gagal") {
  setToast({ teks, jenis });
  setTimeout(() => setToast(null), 3000);
}

  function validate(): FormErrors {
  const errs: FormErrors = {};
  if (!namaLengkap.trim()) errs.namaLengkap = "Nama lengkap wajib diisi";
  if (!namaUsaha.trim()) errs.namaUsaha = "Nama usaha wajib diisi";
  if (!jenisUsaha) errs.jenisUsaha = "Pilih jenis usaha";
  if (!noWhatsapp.trim()) errs.noWhatsapp = "Nomor WhatsApp wajib diisi";
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
    } else {
      tampilkanToast("Email atau password salah", "gagal");
    }
}

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Daftar Akun & Usaha</h1>
      <h4>Daftarkan usaha sekarang untuk menikmati fitur asisten pintar</h4>
      <div className="container">
    <AuthToggle />
  </div>
    <label htmlFor="namaLengkap">Nama Lengkap</label>
      <input
        id="namaLengkap"
        className={errors.namaLengkap ? "error" : "input"}
        placeholder="Masukan Nama Anda"
        value={namaLengkap}
        onChange={(e) => setNamaLengkap(e.target.value)}
      />
    {errors.namaLengkap && (
        <small className="error-message">{errors.namaLengkap}</small>
      )}
      <label htmlFor="namaUsaha">Nama Usaha</label>
      <input
        id="namaUsaha"
        className={errors.namaUsaha ? "error" : "input"}
        placeholder="Masukan Nama Usaha"
        value={namaUsaha}
        onChange={(e) => setNamaUsaha(e.target.value)}
      />
      {errors.namaUsaha && (
        <small className="error-message">{errors.namaUsaha}</small>
      )}
      <label htmlFor="jenisUsaha">Jenis Usaha</label>
      <select
        id="jenisUsaha"
        className={errors.jenisUsaha ? "error" : "input"}
        value={jenisUsaha}
        onChange={(e) => setJenisUsaha(e.target.value)}
      >
        <option value="Kuliner (Makanan / Minuman)">Kuliner (Makanan / Minuman)</option>
        <option value="Fashion / Retail">Fashion / Retail</option>
        <option value="Jasa">Jasa</option>
        <option value="Lainnya">Lainnya</option>
      </select>
      {errors.jenisUsaha && (
        <small className="error-message">{errors.jenisUsaha}</small>
      )}
      <label htmlFor="noWhatsapp">No. WhatsApp</label>
      <input
        id="noWhatsapp"
        type="tel"
        className={errors.noWhatsapp ? "error" : "input"}
        placeholder="081234567890"
        value={noWhatsapp}
        onChange={(e) => setNoWhatsapp(e.target.value)}
      />
      {errors.noWhatsapp && (
        <small className="error-message">{errors.noWhatsapp}</small>
      )}
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
            {showPassword ? "Sembunyikan" : "Lihat"}
        </button>
      </div>
      {errors.password && (
        <small className="error-message">{errors.password}</small>
      )}
      <button type="submit">Daftar Usaha</button>
      {toast && <Toast teks={toast.teks} jenis={toast.jenis} />}
    </form>
  );
}