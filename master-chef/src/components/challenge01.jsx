import { useState } from 'react';

export default function SyncedInputs() {
  const [val, setVal] = useState("");
  return (
    <>
      <Input label="First input" val={val} setVal={setVal} />
      <Input label="Second input" val={val} setVal={setVal}  />
    </>
  );
}

function Input({ label, val, setVal }) {

  function handleChange(e) {
    setVal(e.target.value);
  }

  return (
    <label>
      {label}
      <input
        value={val}
        onChange={handleChange}
      />
    </label>
  );
}
