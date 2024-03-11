import style from './Display.module.css';

let Display = ({ displayValue }) => {
  return (
    <div className={style.displayContainer}>
      <input
        className={style.display}
        type="text"
        value={displayValue}
        readOnly
      />
    </div>
  );
};

export default Display;
