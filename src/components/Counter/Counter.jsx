import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //    const result = useState(2)
  //    console.log(result)

//   const onMInosClick = () => {
//     //setCount (count-1);
//     //setCount ((prevValue) =>{ if prevValue> 0 {prevValue-1} else alert("func outer") });
//     setCount((prevValue) => prevValue - 1);
//   };
const onMinusClick = () => {
    setCount((prevValue) => {
      if (prevValue > 0) {
        return prevValue - 1;
      } else {
        alert("ALLERT Counter<0");
        return prevValue;
      }
    });
  };
  const onPLusClick = () => {
    setCount((prevValue) => prevValue + 1);
  };

  return (
    <div className="counter-component">
      <div className="button-wrapper">
        <Button name="-" onButtonClick={onMinusClick} />
      </div>
      <div className="counter-result">{count}</div>
      <div className="button-wrapper">
        <Button name="+" onButtonClick={onPLusClick} />
      </div>
    </div>
  );
}

export default Counter;
