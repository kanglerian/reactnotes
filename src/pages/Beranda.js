import Navbar from "../components/Navbar";

const Beranda = () => {
  const nama = "Lerian Febriana";
  const usia = 2022 - 1998;
  return (
    <div>
      <Navbar/>
      <header className="App-header">
        <h1>Halo, {nama}</h1>
        <p>Usia ku {usia} tahun</p>
      </header>
    </div>
  );
}

export default Beranda;