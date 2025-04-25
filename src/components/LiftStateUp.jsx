import { useState } from "react";

export const LiftingState = () => {
  const [inputVal, setInputVal] = useState(""); // Lift state up

  return (
    <>
      <InputComponent inputVal={inputVal} setInputVal={setInputVal} />
      <DisplayComponent inputVal={inputVal} />
    </>
  );
};

const InputComponent = ({ inputVal, setInputVal }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)} // Update state
      />
    </>
  );
};
//We want to display e.target.value in Display Component Next to The current input value is:
//But we can't to this directly, we can't pass this data to display component from input component directly via
//props
const DisplayComponent = ({ inputVal }) => {
  return <p>The current input value is: {inputVal}</p>;
};
