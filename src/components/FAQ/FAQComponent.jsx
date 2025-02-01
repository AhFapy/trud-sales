import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border border-[#00FF00] rounded-lg shadow-md mb-4 overflow-hidden">
      {/* Pregunta */}
      <div
        onClick={toggleAnswer}
        className="cursor-pointer bg-black p-4 hover:bg-gray-800 hover:text-white transition-all duration-500 flex justify-between items-center"
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className="text-xl font-bold text-white">{isOpen ? '-' : '+'}</span>
      </div>

      {/* Respuesta (se muestra solo si isOpen es true) */}
      {isOpen && (
        <div className="bg-black p-4 border-t border-[#00FF00]">
          <p
            className="text-white"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      )}
    </div>
  );
};

export default FAQItem;

