// FAQItem.jsx
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border border-black rounded-lg shadow-md mb-4 overflow-hidden">
      {/* Pregunta */}
      <div
        onClick={toggleAnswer}
        className="cursor-pointer bg-black p-4 hover:bg-gray-200 hover:text-black transition-all duration-500 flex justify-between items-center"
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span className="text-xl font-bold">{isOpen ? '-' : '+'}</span>
      </div>

      {/* Respuesta (se muestra solo si isOpen es true) */}
      {isOpen && (
        <div className="bg-black p-4 border-t border-gray-300">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
