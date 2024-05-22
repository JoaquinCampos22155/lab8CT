'use client'
import { useState, useEffect, useRef } from "react"; 
import './globals.css';   

export default function Home() {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');
  const mainRef = useRef(null);  

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression).toString();
        setResult(evalResult);
        setExpression(evalResult);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
      setExpression('');
    } else if (value === '<-') {
      setExpression((prevExpression) => prevExpression.slice(0, -1));
    }else {
      setExpression((prevExpression) => prevExpression + value);
    }
    
    mainRef.current.focus();
  };

  const handleKeyPress = (event) => {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '/', '*', '-', '+', 'Enter', 'c', 'C', 'Backspace'];
    const key = event.key;
    if (validKeys.includes(key)) {
      if (key === 'Enter') {
        handleButtonClick('=');
      } else if (key.toLowerCase() === 'c') {
        handleButtonClick('C');
      } else if (key === 'Backspace'){
        handleButtonClick('<-')
      } else {
        handleButtonClick(key);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', '<-'
  ];

  return (
    <main
      ref={mainRef} 
      className="flex min-h-screen flex-col items-center p-24"
      tabIndex={-1} 
    >
      <h1 className="text-4xl font-bold mb-10">CALCULADORA</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          className="w-full mb-2 text-3xl border-b-2 border-gray-400 text-black focus:outline-strong"
          value={expression}
          readOnly
        />
        <input
          type="text"
          className="w-full text-4xl font-bold mb-4 text-black focus:outline-none"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="text-4xl bg-gray-300 hover:bg-gray-400 p-2 text-black rounded-lg"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
