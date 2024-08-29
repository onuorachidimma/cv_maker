import React, { useState } from 'react';
import CVPreview from '../layouts/Cv-builder/CVTemplate1';
// import exportAsPng from '../layouts/Cv-builder/exportPDF';

const CVBuilder = () => {
  const [cvData, setCvData] = useState({});

  const handleUpdate = (data) => {
    setCvData(data);
  };

  return (
    <div className="">
      
      <div className="">
        <CVPreview data={cvData} />
      </div>
    </div>
  );
}

export default CVBuilder;
