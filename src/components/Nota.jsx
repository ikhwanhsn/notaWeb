import { useEffect, useState } from "react";
import {BiEdit} from 'react-icons/bi'

const Nota = () => {
    const [storeName, setStoreName] = useState('Ali Kusen Sejati');
    const [storeDesc, setStoreDesc] = useState('Menerima: Pembuatan / Jasa Pintu, Jendela, Kusen mebel, dll.');
    const [storePlace, setStorePlace] = useState('Jl. Raya Wringinjajar - Waru KM. 1 Mranggen');
    const [storePhone, setStorePhone] = useState('085290437096');

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

    useEffect(() => {
        const newData = JSON.parse(localStorage.getItem('dataStore'));
        if(!newData) return
        setStoreName(newData.storeName);
        setStoreDesc(newData.storeDesc);
        setStorePlace(newData.storePlace);
        setStorePhone(newData.storePhone);
    }, []);

    return ( 
        <header className="flex justify-center gap-24">
            <section className="relative w-1/2 overflow-hidden text-center">
                <BiEdit className="absolute top-0 right-0 m-1 p-[2px] text-white scale-[1.5] rounded-sm cursor-pointer hover:bg-green-600 print:hidden bg-green-500" onClick={()=>document.getElementById('my_modal_1').showModal()}/>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="flex flex-col w-full gap-2">
                        <InputStore storeName={storeName} change={(e) => setStoreName(e.target.value)} placeholder={'Nama toko...'} max={24}/>
                        <InputStore storeName={storeDesc} change={(e) => setStoreDesc(e.target.value)} placeholder={'Deskripsi toko...'} max={90}/>
                        <InputStore storeName={storePlace} change={(e) => setStorePlace(e.target.value)} placeholder={'Alamat toko...'} max={40}/>
                        <InputStore storeName={storePhone} change={(e) => setStorePhone(e.target.value)} placeholder={'No HP...'} max={18}/>
                    </div>
                    <div className="modal-action">
                    <form method="dialog">
                        <button className="px-3 py-2 mr-1 text-white bg-red-500 rounded-md hover:bg-red-600" onClick={() => {
                            localStorage.clear();
                            window.location.reload();
                        }}>Reset</button>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="px-3 py-2 bg-green-500 rounded-md hover:bg-green-600" onClick={ () => {
                            localStorage.setItem('dataStore', JSON.stringify({
                                storeName: storeName,
                                storeDesc: storeDesc,
                                storePlace: storePlace,
                                storePhone:storePhone,
                            }))}
                        }>Save</button>
                    </form>
                    </div>
                </div>
                </dialog>
                <h1 className="text-3xl font-bold uppercase">{`"${storeName}"`}</h1>
                <h2 className="text-lg font-bold uppercase">{`${storeDesc}`}</h2>
                <p className="capitalize">{`Alamat: ${storePlace}`}</p>
                <p>{`WA: ${storePhone}`}</p>
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

const InputStore = ({storeName, change, placeholder, max}) => {
    return ( 
        <input type="text" className="px-3 py-2 bg-blue-300 rounded-md shadow-sm placeholder:text-black outline-gray-700" value={storeName} onChange={change} placeholder={placeholder} maxLength={max}/>
     );
}