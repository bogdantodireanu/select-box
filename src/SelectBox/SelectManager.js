import React, { useState } from 'react';

export const SelectContext = React.createContext({ selection: "1" });

const SelectManager = ({ children }) => {
    const [selection, setSelection] = useState({ selection: "1" });

    const context = {
        currentSelection: selection,
        updateSelection: (value) => setSelection(state => ({ selection: value }))
    };

    return (
        <SelectContext.Provider value={context}>{children}</SelectContext.Provider>
    );
};


export default SelectManager;

