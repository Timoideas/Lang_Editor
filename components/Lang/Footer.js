import style from './Footer.module.css';
import { Timoideas } from '../Resources/Timoideas';
import { useEffect, useRef, useState } from 'react';
function Footer({
  mode,
  toggleMode,
  langChars,
  setLangChars,
  BackgroundColor,
  ForegroundColor,
  setBackgroundColor,
  setForegroundColor,
}) {
  useEffect(() => {
    // console.log(langChars);
    // Print keyboard with chars
  }, [langChars.lang]);
  const addChar = (value, char) => {
    let ActualChars = langChars.activeChars;
    ActualChars.push([value, char]);
    setLangChars({ ...langChars, activeChars: ActualChars });
  };
  const [ColorEmergente, setColorEmergente] = useState(false);
  const [ModeEmergente, setModeEmergente] = useState(true);
  const InputRef = useRef();
  useEffect(() => {
    const KeyHandler = (e) => {
      if (e.key == 'Enter') {
        setColorEmergente(false);
      }
    };
    window.addEventListener('keypress', KeyHandler);
    return () => {
      window.removeEventListener('keypress', KeyHandler);
    };
  }, [ColorEmergente]);

  const handlerInputColor = (e) => {
    let valor = e.target.value.toUpperCase();
    let last = valor.substr(valor.length - 1);
    const HexCharList = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
    ];
    if (HexCharList.includes(last)) {
      ModeEmergente
        ? setForegroundColor('#' + valor)
        : setBackgroundColor('#' + valor);
    } else {
      e.target.value = e.target.value.substring(0, valor.length - 1);
    }
  };
  const [KeyboardEmergente, setKeyboardEmergente] = useState(false);
  return (
    <div className={style.Footer}>
      <div className={style.Configuracion}>
        <div>
          <div
            className={style.EmergenteColor}
            style={{
              opacity: ColorEmergente ? 1 : 0,
              pointerEvents: ColorEmergente ? 'visible' : 'none',
            }}
          >
            <label
              style={{
                color: ModeEmergente ? ForegroundColor : BackgroundColor,
              }}
            >
              {ModeEmergente ? ForegroundColor : BackgroundColor}
            </label>
            <input
              type='text'
              placeholder=''
              onChange={handlerInputColor}
              autoFocus
              maxLength={6}
              ref={InputRef}
            />
          </div>
          <div
            className={`${style.ConfigButtom} ${style.Color}`}
            onClick={(e) => {
              KeyboardEmergente && setKeyboardEmergente(false);
              e.target.className ===
                'Footer_ConfigButtom__3-5G0 Footer_Color__1M61u' &&
                setColorEmergente(!ColorEmergente);
              InputRef.current.focus();
            }}
          >
            <div>
              <div
                className={style.Foreground}
                style={{ background: ForegroundColor }}
                onClick={() => {
                  KeyboardEmergente && setKeyboardEmergente(false);
                  setColorEmergente(true);
                  setModeEmergente(true);
                  InputRef.current.focus();
                }}
              ></div>
              <div
                className={style.Background}
                style={{ background: BackgroundColor }}
                onClick={() => {
                  KeyboardEmergente && setKeyboardEmergente(false);
                  setColorEmergente(true);
                  setModeEmergente(false);
                  InputRef.current.focus();
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className={style.ConfigButtomContainer}>
          <div
            className={style.EmergenteKeyboard}
            style={{
              opacity: KeyboardEmergente ? 1 : 0,
              pointerEvents: KeyboardEmergente ? 'visible' : 'none',
            }}
          >
            <div
              onClick={() => {
                addChar('a', 'A');
              }}
              className={style.Key}
            >
              <label>A</label>
            </div>
            <div
              onClick={() => {
                addChar('b', 'B');
              }}
              className={style.Key}
            >
              <label>B</label>
            </div>
            <div
              onClick={() => {
                addChar('c', 'C');
              }}
              className={style.Key}
            >
              <label>C</label>
            </div>
            <div
              onClick={() => {
                addChar('d', 'д');
              }}
              className={style.Key}
            >
              <label>д</label>
            </div>
            <div
              onClick={() => {
                addChar('p', 'г');
              }}
              className={style.Key}
            >
              <label>г</label>
            </div>
            <div
              onClick={() => {
                addChar('r', 'p');
              }}
              className={style.Key}
            >
              <label>p</label>
            </div>
            <div
              onClick={() => {
                addChar('i', 'и');
              }}
              className={style.Key}
            >
              <label>и</label>
            </div>
            <div
              onClick={() => {
                addChar('p', 'п');
              }}
              className={style.Key}
            >
              <label>п</label>
            </div>
            <div
              onClick={() => {
                addChar('s', 'c');
              }}
              className={style.Key}
            >
              <label>c</label>
            </div>
            <div
              onClick={() => {
                addChar('l', 'л');
              }}
              className={style.Key}
            >
              <label>л</label>
            </div>
            <div
              onClick={() => {
                addChar('g', 'д');
              }}
              className={style.Key}
            >
              <label>д</label>
            </div>
            <div
              onClick={() => {
                addChar('a', 'д');
              }}
              className={style.Key}
            >
              <label>л</label>
            </div>
            <div
              onClick={() => {
                addChar('a', 'д');
              }}
              className={style.Key}
            >
              <label>л</label>
            </div>
          </div>
          <div
            className={`${style.ConfigButtom} ${style.Keyboard}`}
            onClick={() => {
              ColorEmergente && setColorEmergente(false);
              setKeyboardEmergente(!KeyboardEmergente);
            }}
            style={{ color: ForegroundColor }}
          >
            KEYBOARD
          </div>
        </div>
        <div>
          <div className={`${style.ConfigButtom} ${style.Mode}`}>
            <div
              className={`${mode ? style.Focus : style.Area}`}
              onClick={toggleMode}
              style={{ background: BackgroundColor }}
            >
              <span style={{ background: ForegroundColor }}></span>
              <span style={{ background: ForegroundColor }}></span>
              <span style={{ background: ForegroundColor }}></span>
            </div>
          </div>
        </div>
      </div>
      <Timoideas />
    </div>
  );
}
export default Footer;
