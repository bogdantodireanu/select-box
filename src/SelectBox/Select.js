import React, { useContext, useState } from "react";
import Option from "./Option";
import "./selectStyles.css";
import { SelectContext } from "./SelectManager";

const Select = () => {
  const { currentSelection } = useContext(SelectContext);
  const [dropDown, setDropDown] = useState(false);
  const options = [1, 2, 3, 4, 5];
  const dropDownControl = bool => {
    setDropDown(bool);
  };

  return (
    <div className="mainWrap">
        <p>Current selection is {currentSelection}</p>
        <Option
            value={currentSelection}
            dropDownControl={() => setDropDown(!dropDown)}
        />
        {dropDown && (
            <div className="dropdown" active="true">
                {options.map(item => (
                    <Option
                        value={item}
                        key={item}
                        dropDownControl={() => dropDownControl(false)}
                        dropDownItem={true}
                    />
                ))}
            </div>
        )}
    </div>
  );
};

export default Select;
