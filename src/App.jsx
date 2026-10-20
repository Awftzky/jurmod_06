import { useState } from 'react'

import Panel from './components/Panel';
import './App.css'
import KartuMenu from './components/KartuMenu';

function App() {
  let N = 95;
  return(
    <>
    <Panel judul="Menu Hari Ini">
      <KartuMenu namaMakanan="Nasi Ayam Geprek" harga={10000 + (N * 100)}/>
      <KartuMenu namaMakanan="Es Teh Lemon" kategori="Minuman" harga="Rp 6.000"/>
      <KartuMenu namaMakanan="Mie Goreng Telur" harga="Rp 12.000"/>
    </Panel>
    </>
  );
}

export default App
