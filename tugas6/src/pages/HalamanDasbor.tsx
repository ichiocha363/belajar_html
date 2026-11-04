import { useNavigate } from "react-router-dom";

export default function HalamanDasbor() {
    const navigasi = useNavigate();

    function tombolkeluar(){
        navigasi("/")
    }
  return (
    <div>
      <h1>hallo</h1>
      <button type="button" onClick={tombolkeluar}>Keluar</button>
    </div>
  );
}