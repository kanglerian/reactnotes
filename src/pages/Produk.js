import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Produk = () => {
  const konten = "Selamat datang di UI React JS ini sedang percobaan.";
  const [paslon, setPaslon] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/paslon')
    .then((result) => {
      // setPaslon(result.data);
      setPaslon(result.data.data);
    });
  });

  const listProduct = paslon.map((product) => 
    <div className="card">
      <div>{product.no_urut}</div>
      <img key={product} className="image" src={product.image} alt="gambar"/>
      <h5 className="title">{product.Ketua.nama_lengkap} & {product.Wakil.nama_lengkap}</h5>
      <p className="text">{product.Ketua.kelas} & {product.Wakil.kelas}</p>
      <p className="text">Visi: {product.visi}</p>
      <p className="text">Misi: {product.misi}</p>
    </div>
  );

  return (
    <div>
      <Navbar />
      <header className="App-header">
        <h1>Produk</h1>
        <p>{konten}</p>
        <div className="container">{listProduct}</div>
      </header>
    </div>
  );
}

export default Produk;