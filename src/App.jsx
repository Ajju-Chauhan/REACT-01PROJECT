import style from "./App.module.css";
import Display from "./Display";
import ButtonContainer from "./ButtonCantainer";
import { useState } from "react";

function App() {
  let [calval, setcalval] = useState("");

  const onClickButton = (item) => {
    if (item === 'C') {
      setcalval("");
    } else if (item === '=') {
      try {
        setcalval(eval(calval));
      } catch (error) {
        setcalval("Error");
      }
    } else {
      setcalval(calval + item);
    }
  }

  return (
    <div className={style.calculator} style={{marginTop:'30px'}}>
      <Display displayValue={calval} />
      <ButtonContainer onClickButton={onClickButton} />
    </div>
  );
}

export default App;
