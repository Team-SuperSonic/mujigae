import React, { forwardRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

const DownloadPalette = ({ children, id }, ref) => {
  return (
    <button
      onClick={() => {
        exportComponentAsPNG(ref, { fileName: `mujigae ${id ? id : ""}` });
      }}>
      {children}
    </button>
  );
};

export default forwardRef(DownloadPalette);
