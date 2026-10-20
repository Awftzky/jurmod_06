import LabelHarga from "./LabelHarga";

function KartuMenu ({namaMakanan , harga , kategori="Makanan"}) {
    return (
        <div className="kartu">
            <h3>{namaMakanan}</h3>
            <p>{kategori}</p>
            <LabelHarga nilai = {harga}/>
        </div>
    );
 }

 export default KartuMenu;