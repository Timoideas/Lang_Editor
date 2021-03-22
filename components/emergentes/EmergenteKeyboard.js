import style from './EmergenteKeyboard.module.css';
function EmergenteKeyboard({ langChars, addChar }) {
  return (
    <div className={style.EmergenteKeyboard}>
      {langChars.chars.map((char, index) => (
        <div
          onClick={() => {
            addChar(char[1], char[0]);
          }}
          className={style.Key}
          key={index}
        >
          <div
            className={style.KeyDescription}
            style={{ background: char[3] && '#fa0' }}
          >
            {char[1]}
          </div>
          {char[0]}
        </div>
      ))}
    </div>
  );
}
export default EmergenteKeyboard;
