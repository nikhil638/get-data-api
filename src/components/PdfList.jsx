import React from "react";
import PDFItem from "./PDFItem";
import "./css/PdfList.css";

const PDFList = ({ pdfs, onSelect }) => (
  <div className="section">
    <div className="container">
      <div className="row">
      <div className="col-xl-12">
         <div className="all-data">
         {pdfs.map((pdf, index) => (
          <PDFItem key={index} pdf={pdf} onSelect={onSelect} />
           ))}
         </div>
  </div>
      </div>
    </div>
  </div>
);

export default PDFList;
