import React, { useContext } from "react";
import { SelectContext } from "./SelectManager";

const Option = ({ value, dropDownControl, dropDownItem }) => {
  const { currentSelection, updateSelection } = useContext(SelectContext);

  return (
    <button
      className={dropDownItem && Number(currentSelection) === value ? "selected" : ""}
      value={value}
      onClick={e => {
        updateSelection(e.target.value);
        dropDownControl();
      }}
    >
      Option number {value}
    </button>
  );
};

export default Option;
