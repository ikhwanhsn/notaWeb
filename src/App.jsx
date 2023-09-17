import Nota from "./components/Nota"
import Table from "./components/Table"
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="">
      <div ref={componentRef} className="flex flex-col items-center justify-center w-[1000px] h-[600px] py-5 mx-auto my-5 bg-blue-200 rounded-md print:bg-white">
        <Nota/>
        <Table/>
      </div>
      <div className="relative">
        <button onClick={handlePrint} className='absolute w-fit px-3 py-2 text-white bg-green-500 rounded-md shadow-md -top-[608px] md:left-32 md:ml-4 left-3'>Print Nota</button>
      </div>
    </div>
  )
}

export default App
