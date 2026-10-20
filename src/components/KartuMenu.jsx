import { useState } from "react";
import LabelHarga from "./LabelHarga";

function KartuMenu ({namaMakanan , harga , kategori="Makanan"}) {

    const [jumlah, setJumlah] = useState(0);
    return (
        <div className="kartu">
            <h3>{namaMakanan}</h3>
            <p>{kategori}</p>
            <LabelHarga nilai = {harga}/>
            <div>
                <button onClick={()=> setJumlah(jumlah = 1)}>Tambah</button>
                <p>{jumlah}</p>
                <button onClick={()=> setJumlah(jumlah - 1)}>Kurang</button>
            </div>
            <label >
                Catatan pesanan :
                            <input type="text" />
            </label>
        </div>
    );
 }

 export default KartuMenu;