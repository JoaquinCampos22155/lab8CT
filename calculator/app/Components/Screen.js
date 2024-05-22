import React from 'react';

export default function Screen({ expression, result }) {
  return (
    <div>
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
    </div>
  );
}
