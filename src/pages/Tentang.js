import Navbar from "../components/Navbar";

const Tentang = () => {
  const konten = "Selamat datang di UI React JS ini sedang percobaan.";
  return (
    <div>
      <Navbar/>
      <header className="App-header">
        <h1>Tentang</h1>
        <p>{konten}</p>
      </header>
    </div>
  );
}

export default Tentang;