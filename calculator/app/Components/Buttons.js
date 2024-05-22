import React from 'react';

const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '%', '+',
  'C', '<-', '='
];

export default function Buttons({ onButtonClick }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => onButtonClick(btn)}
          className="text-4xl bg-gray-300 hover:bg-gray-400 p-2 text-black rounded-lg"
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
