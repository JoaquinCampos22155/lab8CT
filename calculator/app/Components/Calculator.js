'use client'
import { useState, useEffect, useRef } from "react";
import '../globals.css';
import Screen from './Screen';
import Buttons from './Buttons';

export default function Calculator() {
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
    } else if (value === '%') {
      try {
        const evalResult = eval(expression).toString();
        const percentage = (parseFloat(evalResult) / 100).toString();
        setResult(percentage);
        setExpression(percentage);
      } catch (error) {
        setResult('Error');
      }
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }

    mainRef.current.focus();
  };

  const handleKeyPress = (event) => {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '/', '*', '-', '+', '%',  'c', 'C', 'Backspace'];
    const key = event.key;
    if (validKeys.includes(key)) {
      if (key.toLowerCase() === 'c') {
        handleButtonClick('C');
      } else if (key === 'Backspace') {
        handleButtonClick('<-');
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

  return (
    <main
      ref={mainRef}
      className="flex min-h-screen flex-col items-center p-24"
      tabIndex={-1}
    >
      <h1 className="text-4xl font-bold mb-10">CALCULADORA</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Screen expression={expression} result={result} />
        <Buttons onButtonClick={handleButtonClick} />
      </div>
    </main>
  );
}
