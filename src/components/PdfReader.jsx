import React from "react";
import "./css/PdfReader.css";

const PDFReader = ({ pdf, onBack }) => {
  // Check if pdf is null or undefined
  if (!pdf || Object.keys(pdf).length === 0) {
    return <p className="text-center text-gray-500">No PDF selected.</p>;
  }

  return (
    <div className="pdf-reader p-4 border rounded shadow-lg bg-white">
      <button onClick={onBack} className="button mb-2">
        Back
      </button>
      <h2 className="font-bold mb-2">{pdf.name || "Untitled PDF"}</h2>
      <p className="mb-2 text-gray-600">By {pdf.author || "Unknown Author"}</p>
      <iframe
        src={pdf.link}
        title={pdf.name}
        className="pdf-frame w-full h-96 border rounded-lg"
      ></iframe>
    </div>
  );
};

export default PDFReader;
