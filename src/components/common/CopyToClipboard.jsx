import React from "react";

const CopyToClipboard = ({ copyData, children, ...props }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  if (!children) {
    return;
  }

  return (
    <button
      onClick={() => {
        handleCopy(copyData);
      }}
      clas
      sName={props.className}>
      {children}
    </button>
  );
};

export default React.memo(CopyToClipboard);
