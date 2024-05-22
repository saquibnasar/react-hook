import { useEffect, useMemo, useState } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyle]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        change theme
      </button>
      <div style={themeStyle}>{doubleNumber} </div>
    </>
  );
}

function slowFunction(num) {
  console.log("calling slow function");
  for (let i = 0; i <= 1000000000; i++);
  console.log("end calling slow function");
  return num * 2;
}
