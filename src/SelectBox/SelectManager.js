import React, { useState } from "react";

export const SelectContext = React.createContext(1);

const SelectManager = ({ children }) => {
  const [selection, setSelection] = useState(1);

  const context = {
    currentSelection: selection,
    updateSelection: value => setSelection(value)
  };

  return (
    <SelectContext.Provider value={context}>{children}</SelectContext.Provider>
  );
};

export default SelectManager;
