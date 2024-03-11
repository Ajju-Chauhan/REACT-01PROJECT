import style from "./ButtonCantainer.module.css";

let ButtonContainer = ({ onClickButton }) => {
  const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9','00','0', '.'];

  return (
    <div className={style.buttonContainer}>
      {buttons.map((item, index) => (
        <button
          key={index}
          className={style.button}
          onClick={() => onClickButton(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
