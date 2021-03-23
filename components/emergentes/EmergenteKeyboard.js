import style from './EmergenteKeyboard.module.css';
function EmergenteKeyboard({ langChars, addChar }) {
  const AddAllChars = () => {
    langChars.chars.forEach((char) => {
      addChar(char[1], char[0]);
    });
  };
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
      <div
        onClick={() => {
          for (let i = 0; i < langChars.chars.length; i++) {
            // console.log(langChars.chars[i][1]);
            addChar(langChars.chars[i][1], langChars.chars[i][0]);
          }
        }}
        className={style.Key}
      >
        <div className={style.KeyDescription} style={{ background: '#fa0' }}>
          +
        </div>
        All
      </div>
    </div>
  );
}
export default EmergenteKeyboard;
