'use client'
import { ReadonlyURLSearchParams } from "next/navigation";
import PreviousMap from "postcss/lib/previous-map";
import { useState } from "react";
export default function Home() {
  const [result, setResult] = useState('')
  const [expression, setExpression] = useState('')

  const handleButtonClick = (value) => {
    if (value == '='){
        try {
          setResult(eval(expression).toString());

        } catch (error) {
          setResult('Error ');
        }
      } else if(value == 'C'){
          setResult('');
          setExpression('');
      } else {
        setExpression((prevExpression) => prevExpression + value);
      }
  };

  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
    'C'
  ];
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-4x1 font-bold mb-10 ">Calculadora</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          className="w-full mb-2 text-3x1 border-b-2 border-gray-400 focus:outline-strong"
          value={expression}
          readOnly
        />

      </div>
    </main>
  );
}
