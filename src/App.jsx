import { useState } from 'react'
import './App.css'

function App() {
  const name = "Aufa";
  let time = 9;
  let n =0;

  return(
    <>
      <h1 style={{color: "blue"}}>Kantin - {name}</h1>
      <p>{time < 12 ? "Selamat Pagi" : "Selamat Siang"}</p>
      <p>saldo Awal Kartu kantin: {n * 1000}</p>
      <button type='submit'>Bayar</button>
    </>
  );
}

export default App
