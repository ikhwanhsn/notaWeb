import { useState } from "react";

const Nota = () => {
    const [name, setName] = useState('Mas Rohman');
    const [notaNo, setNotaNo] = useState(12345);

    const date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let dateNow = date.getDate();
    let day = date.getDay();

    switch(day) {
        case 0: day = "Minggu"; break;
        case 1: day = "Senin"; break;
        case 2: day = "Selasa"; break;
        case 3: day = "Rabu"; break;
        case 4: day = "Kamis"; break;
        case 5: day = "Jum'at"; break;
        case 6: day = "Sabtu"; break;
    }

    switch(month){
        case 0: month = "Januari"; break;
        case 1: month = "Februari"; break;
        case 2: month = "Maret"; break;
        case 3: month = "April"; break;
        case 4: month = "Mei"; break;
        case 5: month = "Juni"; break;
        case 6: month = "Juli"; break;
        case 7: month = "Agustus"; break;
        case 8: month = "September"; break;
        case 9: month = "Oktober"; break;
        case 10: month = "November"; break;
        case 11: month = "Desember"; break;
    }

    return ( 
        <header className="flex justify-center gap-24">
            <section className="relative w-1/2 text-center">
                <h1 className="text-3xl font-bold uppercase">"Ali Kusen Sejati"</h1>
                <h2 className="text-lg font-bold uppercase">Menerima: Pembuatan / Jasa Pintu, Jendela, Kusen mebel, dll.</h2>
                <p className="capitalize">Alamat: Jl. Raya Wringinjajar - Waru KM. 1 Mranggen</p>
                <p>HP: 085290437096</p>
                <input type="text" value={notaNo} onChange={(e) => setNotaNo(e.target.value)} onClick={() => notaNo === 12345 && setNotaNo('')} className="absolute w-24 mt-1 text-xl bg-transparent left-24 top-36 placeholder:text-gray-500 print:placeholder:text-transparent"/>
                <h3 className="mt-3 text-lg font-bold text-left">NOTA No. .....................</h3>
            </section>
            <section className="relative leading-7 text-left">
                <p className="">{`${day}, ${dateNow} ${month} ${year}`}</p>
                <h3 className="my-1 font-bold">Kepada Yth:</h3>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} onClick={() => name === 'Mas Rohman' && setName('')} className="absolute text-lg bg-transparent w-60 placeholder:text-gray-500 top-14 print:placeholder:text-transparent"/>
                <input type="text" className="absolute mt-1 text-lg bg-transparent w-60 placeholder:text-gray-500 top-20 print:placeholder:text-transparent"/>
                <input type="text" className="absolute text-lg bg-transparent w-60 placeholder:text-gray-500 top-28 print:placeholder:text-transparent"/>
                <p>........................................................................</p>
                <p>........................................................................</p>
                <p className="underline">........................................................................</p>
            </section>
        </header>
     );
}
 
export default Nota;