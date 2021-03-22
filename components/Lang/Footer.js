import style from './Footer.module.css';
import { Emergente, Timoideas } from '../Resources/Timoideas';
import { useEffect, useRef, useState } from 'react';
import EmergenteKeyboard from 'components/emergentes/EmergenteKeyboard';

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
  // Emergente Keyboard
  const [EmergenteKeyboarState, setEmergenteKeyboarState] = useState(false);
  const toggleEmergenteKeyboarState = () => {
    setEmergenteKeyboarState(!EmergenteKeyboarState);
  };

  // Anadir caracter a caracteres activos
  const addChar = (value, char) => {
    let ActualChars = langChars.activeChars;
    ActualChars.push([value, char]);
    setLangChars({ ...langChars, activeChars: ActualChars });
  };
  const [ColorEmergente, setColorEmergente] = useState(false);
  const [ModeEmergente, setModeEmergente] = useState(true);
  const InputRef = useRef();
  // Cerrar el Emergente de color cuando se presiona ENTER
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

  // Abrir teclado si se presiona ESPACIO
  useEffect(() => {
    const handlerKeyboardState = (e) => {
      if (e.key == ' ') {
        toggleEmergenteKeyboarState();
      }
    };
    window.addEventListener('keypress', handlerKeyboardState);
    return () => {
      window.removeEventListener('keypress', handlerKeyboardState);
    };
  }, [EmergenteKeyboarState]);

  // Manejador de colores
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
              EmergenteKeyboarState && setEmergenteKeyboarState(false);
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
                  EmergenteKeyboarState && setEmergenteKeyboarState(false);
                  setColorEmergente(true);
                  setModeEmergente(true);
                  InputRef.current.focus();
                }}
              ></div>
              <div
                className={style.Background}
                style={{ background: BackgroundColor }}
                onClick={() => {
                  EmergenteKeyboarState && setEmergenteKeyboarState(false);
                  setColorEmergente(true);
                  setModeEmergente(false);
                  InputRef.current.focus();
                }}
              ></div>
            </div>
          </div>
        </div>
        <Emergente
          child={<EmergenteKeyboard langChars={langChars} addChar={addChar} />}
          active={[EmergenteKeyboarState, toggleEmergenteKeyboarState, true]}
          position={[2, null, null, null]}
        >
          <div
            className={style.Keyboard}
            onClick={() => {
              ColorEmergente && setColorEmergente(false);
              setEmergenteKeyboarState(!EmergenteKeyboarState);
            }}
          >
            KEYBOARD
          </div>
        </Emergente>
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
