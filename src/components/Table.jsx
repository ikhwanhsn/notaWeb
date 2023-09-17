import { useEffect, useState } from "react";

const Table = () => {
    const [amount1, setAmount1] = useState(1);
    const [nameProduct1, setNameProduct1] = useState('Nama barang');
    const [price1, setPrice1] = useState(10000);

    const [amount2, setAmount2] = useState(null);
    const [nameProduct2, setNameProduct2] = useState(null);
    const [price2, setPrice2] = useState(null);

    const [amount3, setAmount3] = useState(null);
    const [nameProduct3, setNameProduct3] = useState(null);
    const [price3, setPrice3] = useState(null);

    const [amount4, setAmount4] = useState(null);
    const [nameProduct4, setNameProduct4] = useState(null);
    const [price4, setPrice4] = useState(null);

    const [amount5, setAmount5] = useState(null);
    const [nameProduct5, setNameProduct5] = useState(null);
    const [price5, setPrice5] = useState(null);

    const [total, setTotal] = useState(0);

    const [totalMoney, setTotalMoney] = useState(null);
    const [moneyBack, setMoneyBack] = useState(0);

    const [peopleOrder, setPeopleOrder] = useState('');
    const [ownerStore, setOwnerStore] = useState('');

    useEffect(() => {
        // Hitung total harga
        const newTotal = price1 * amount1 + price2 * amount2 + price3 * amount3 + price4 * amount4 + price5 * amount5;
        // Perbarui nilai total
        setTotal(newTotal);

        // Hitung total harga
        const newMoneyBack = totalMoney - (price1 * amount1 + price2 * amount2 + price3 * amount3 + price4 * amount4 + price5 * amount5);
        // Perbarui nilai total
        setMoneyBack(newMoneyBack);
    }, [price1, price2, price3, price4, price5, amount1, amount2, amount3, amount4, amount5, totalMoney]);

    return ( 
        <main className="mt-3">
            <section>
                <table className="">
                    <thead>
                        <tr className="text-lg">
                            <th className="px-4 border-2 border-black h-9">Banyak</th>
                            <th className="px-40 border-2 border-black h-9">Nama Barang</th>
                            <th className="px-10 border-2 border-black h-9">Harga</th>
                            <th className="px-12 border-2 border-black h-9">Jumlah</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="relative text-lg">
                            <td className="border-2 border-black h-9"><input type="number" value={amount1} onChange={e => setAmount1(e.target.value)} className="absolute top-0 left-0 w-24 mt-1 text-center bg-transparent placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="text" value={nameProduct1} onChange={e => setNameProduct1(e.target.value)} onClick={() => nameProduct1 === 'Nama barang' && setNameProduct1('')} className="absolute top-0 pl-3 mt-1 bg-transparent w-96 left-24 placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="number" value={price1} onChange={e => setPrice1(e.target.value)} className="absolute top-0 w-32 mt-1 mr-3 text-center bg-transparent right-36 placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="number" value={(price1*amount1).toLocaleString('id-ID')}className="absolute top-0 right-0 mt-1 text-center bg-transparent w-36 placeholder:text-gray-500 print:placeholder:text-transparent" readOnly/></td>
                        </tr>
                        <tr className="relative text-lg">
                            <td className="border-2 border-black h-9"><input type="number" value={amount2} onChange={e => setAmount2(e.target.value)} className="absolute top-0 left-0 w-24 mt-1 text-center bg-transparent placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="text" value={nameProduct2} onChange={e => setNameProduct2(e.target.value)} onClick={() => nameProduct2 === 'Nama barang' && setNameProduct2('')} className="absolute top-0 pl-3 mt-1 bg-transparent w-96 left-24 placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="number" value={price2} onChange={e => setPrice2(e.target.value)} className="absolute top-0 w-32 mt-1 mr-3 text-center bg-transparent right-36 placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="number" value={amount2 === null? null : (price2*amount2).toLocaleString('id-ID')}className="absolute top-0 right-0 mt-1 text-center bg-transparent w-36 placeholder:text-gray-500 print:placeholder:text-transparent" readOnly/></td>
                        </tr>
                        <tr className="relative text-lg">
                            <td className="border-2 border-black h-9"><input type="number" value={amount3} onChange={e => setAmount3(e.target.value)} className="absolute top-0 left-0 w-24 mt-1 text-center bg-transparent placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="text" value={nameProduct3} onChange={e => setNameProduct3(e.target.value)} onClick={() => nameProduct3 === 'Nama barang' && setNameProduct3('')} className="absolute top-0 pl-3 mt-1 bg-transparent w-96 left-24 placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="number" value={price3} onChange={e => setPrice3(e.target.value)} className="absolute top-0 w-32 mt-1 mr-3 text-center bg-transparent right-36 placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="number" value={amount3 === null? null : (price3*amount3).toLocaleString('id-ID')}className="absolute top-0 right-0 mt-1 text-center bg-transparent w-36 placeholder:text-gray-500 print:placeholder:text-transparent" readOnly/></td>
                        </tr>
                        <tr className="relative text-lg">
                            <td className="border-2 border-black h-9"><input type="number" value={amount4} onChange={e => setAmount4(e.target.value)} className="absolute top-0 left-0 w-24 mt-1 text-center bg-transparent placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="text" value={nameProduct4} onChange={e => setNameProduct4(e.target.value)} onClick={() => nameProduct4 === 'Nama barang' && setNameProduct4('')} className="absolute top-0 pl-3 mt-1 bg-transparent w-96 left-24 placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="number" value={price4} onChange={e => setPrice4(e.target.value)} className="absolute top-0 w-32 mt-1 mr-3 text-center bg-transparent right-36 placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="number" value={amount4 === null? null : (price4*amount4).toLocaleString('id-ID')}className="absolute top-0 right-0 mt-1 text-center bg-transparent w-36 placeholder:text-gray-500 print:placeholder:text-transparent" readOnly/></td>
                        </tr>
                        <tr className="relative text-lg">
                            <td className="border-2 border-black h-9"><input type="number" value={amount5} onChange={e => setAmount5(e.target.value)} className="absolute top-0 left-0 w-24 mt-1 text-center bg-transparent placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="text" value={nameProduct5} onChange={e => setNameProduct5(e.target.value)} onClick={() => nameProduct5 === 'Nama barang' && setNameProduct5('')} className="absolute top-0 pl-3 mt-1 bg-transparent w-96 left-24 placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="number" value={price5} onChange={e => setPrice5(e.target.value)} className="absolute top-0 w-32 mt-1 mr-1 text-center bg-transparent right-36 placeholder:text-gray-500 print:placeholder:text-transparent"/></td>
                            <td className="border-2 border-black h-9"><input type="number" value={amount5 === null? null : (price5*amount5).toLocaleString('id-ID')}className="absolute top-0 right-0 mt-1 text-center bg-transparent w-36 placeholder:text-gray-500 print:placeholder:text-transparent" readOnly/></td>
                        </tr>
                        <tr className="relative text-lg text-center">
                            <td className="absolute font-bold left-10 top-2">Pemesan</td>
                            <td className="pt-2 pr-12 font-bold text-right">Hormat Kami,</td>
                            <td className="pl-3 font-bold text-left border-2 border-black h-9">Jumlah Total</td>
                            <td className="border-2 border-black h-9"><input type="number" value={total.toLocaleString('id-ID')}className="absolute top-0 right-0 mt-1 text-center bg-transparent w-36 placeholder:text-gray-500 print:placeholder:text-transparent" readOnly/></td>
                        </tr>
                        <tr className="relative text-lg text-center">
                            <td className=""></td>
                            <td className=""></td>
                            <td className="pl-3 font-bold text-left border-2 border-black h-9">Uang Muka</td>
                            <td className="border-2 border-black h-9"><input type="number" value={totalMoney}className="absolute top-0 right-0 mt-1 text-center bg-transparent w-36 placeholder:text-gray-500 print:placeholder:text-transparent" onChange={e => setTotalMoney(e.target.value)}/></td>
                        </tr>
                        <tr className="relative text-lg text-center">
                            <td>
                                <input type="text" value={peopleOrder} className="absolute z-20 mt-1 text-lg text-center bg-transparent -top-3 left-3 w-36 placeholder:text-gray-500 print:placeholder:text-transparent" onChange={e => setPeopleOrder(e.target.value)}/>
                                <p className="absolute text-gray-500 top-1 left-8">(.........................)</p>
                            </td>
                            <td>
                                <input type="text" value={ownerStore} className="absolute z-20 mt-1 mr-3 text-lg text-center bg-transparent -top-3 right-80 w-36 placeholder:text-gray-500 print:placeholder:text-transparent" onChange={e => setOwnerStore(e.target.value)}/>
                                <p className="text-right text-gray-500 pr-14">(.........................)</p>
                            </td>
                            <td className="pl-3 font-bold text-left border-2 border-black h-9">Sisa</td>
                            <td className="border-2 border-black h-9"><input type="number" value={totalMoney === null? null : moneyBack.toLocaleString('id-ID')}className="absolute top-0 right-0 mt-1 text-center bg-transparent w-36 placeholder:text-gray-500 print:placeholder:text-transparent" readOnly/></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
     );
}
 
export default Table;