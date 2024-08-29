import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

const exportAsPng = () => {
  toPng(document.getElementById('cv-preview'))
    .then((dataUrl) => {
      saveAs(dataUrl, 'cv.png');
    });
};

// Similar functions can be written for DOCX and PDF exports
