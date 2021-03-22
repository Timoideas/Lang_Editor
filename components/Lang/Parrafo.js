import style from './Parrafo.module.css';
import { Content, Modal } from 'components/Resources/Timoideas';
import { useEffect, useState } from 'react';
function Parrafo({ mode, langChars, ForegroundColor, BackgroundColor }) {
  const [PasteData, setPasteData] = useState(['Paslte your texlt 😀']);
  const [ScrollValue, setScrollValue] = useState(30);
  useEffect(() => {
    langChars.activeChars.forEach((char) => {
      let dataChanged = PasteData.map((line) =>
        line.replaceAll(char[0], char[1])
      );
      setPasteData(dataChanged);
    });
    // console.log(langChars, 'Active chars');
  }, [langChars]);

  useEffect(() => {
    const KeyHandler = (e) => {
      if (e.shiftKey && e.key) {
        setScrollValue(ScrollValue + 7.5);
        return;
      }
      switch (e.key) {
        case 'Enter':
        case 'ArrowRight':
        case 'ArrowDown':
        case 's':
        case 'a':
          setScrollValue(ScrollValue - 7.5);
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'w':
        case 'd':
          setScrollValue(ScrollValue + 7.5);
          break;
        case 'Home':
          setScrollValue(30);
          break;
        case 'End':
          setScrollValue(-30);
          // Corregir
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', KeyHandler);
    return () => {
      window.removeEventListener('keydown', KeyHandler);
    };
  }, [ScrollValue]);
  // Crear manejador para avanzar al siguente párrafo
  useEffect(() => {
    const pasteHandler = (e) => {
      let data = (e.clipboardData || window.clipboardData)
        .getData('text')
        .split('\n');
      const daata = data.map((line) => line.replaceAll('l', 'л'));
      setPasteData(daata);
    };
    window.addEventListener('paste', pasteHandler);
    return () => {
      window.removeEventListener('paste', pasteHandler);
    };
  }, [PasteData]);
  const [Blur, setBlur] = useState(true);
  useEffect(() => {
    const clip = async () => {
      let data = (await navigator.clipboard.readText()).split('\n');
      const dataa = data.map((line) => line.replaceAll('l', 'л'));
      if (data) {
        setPasteData(dataa);
      }
    };
    Blur && clip();
  }, [Blur]);
  const [ModalAutomaticPaste, setModalAutomaticPaste] = useState(false);
  useEffect(() => {
    let data;
    const clip = async () => {
      data = (await navigator.clipboard.readText()).split('\n');
    };
    clip();
    window.onfocus = () => {
      console.log(PasteData);
      console.log(data);
      if (PasteData !== data) {
        console.log('hola mundo');
        setPasteData(data);
        setModalAutomaticPaste(true);
        setBlur(true);
      } else {
        setBlur(false);
      }
    };
    window.onblur = () => {
      setModalAutomaticPaste(false);
      setBlur(false);
    };
  }, []);
  const toggleModalAutomaticPaste = () => {
    setModalAutomaticPaste(!ModalAutomaticPaste);
  };
  const [Ckeck, setCkeck] = useState(false);
  const handlerPasteConfig = () => {
    setCkeck(!Ckeck);
  };
  return (
    // Agregar opcion para que no se cierre automáticamente Modal
    <Content center flex={1} style={{ background: BackgroundColor }}>
      {/* <Modal
        bg={'#0003'}
        center
        active={[ModalAutomaticPaste, toggleModalAutomaticPaste, true]}
        blur={1}
        transition={0.3}
      >
        <div className={style.ModalAutomaticPaste}>
          <div className={style.LogoCheck}>✔</div>
          <div>
            <h1>Portapapeles</h1>
          </div>
          <div className={style.DataPeview}>
            {PasteData.map((line, index) => (
              <b key={index}>{line}</b>
            ))}
          </div>
          <div className={style.CheckBoxContainer}>
            <div className={style.CheckBox}>
              <input
                type='checkbox'
                defaultChecked={Ckeck}
                onChange={handlerPasteConfig}
              />
              <div>No volver a mostrar</div>
            </div>
            <div className={style.CheckBox}>
              <input
                type='checkbox'
                defaultChecked={!Ckeck}
                onChange={handlerPasteConfig}
              />
              <div>Siempre pegar automáticamente.</div>
            </div>
          </div>
          <button
            onClick={() => {
              setModalAutomaticPaste(!Ckeck);
            }}
          >
            Pegar de Portapapeles
          </button>
        </div>
      </Modal> */}
      <div className={style.ParrafoContainer}>
        <div className={style.Smoke}>
          <div
            style={{
              opacity: mode ? 1 : 0,
              background: `linear-gradient(${BackgroundColor}, transparent)`,
            }}
            onTouchEnd={() => {
              setScrollValue(ScrollValue + 7.5);
            }}
            onClick={() => {
              setScrollValue(ScrollValue + 7.5);
            }}
          />
          <div
            style={{
              opacity: mode ? 1 : 0,
              background: `linear-gradient(transparent,${BackgroundColor})`,
            }}
            onTouchEnd={() => {
              setScrollValue(ScrollValue - 7.5);
            }}
            onClick={() => {
              setScrollValue(ScrollValue - 7.5);
            }}
          />
        </div>
        <div
          className={style.Parrafo}
          style={{
            top: ScrollValue + 'vh',
          }}
        >
          {/* Mostrar modal indicando preguntando al usuario si desea copiar automaticamente lo que tiene en el portapapeles */}
          {PasteData.map((line, index) => (
            <label
              key={index}
              className={style.Frase}
              style={{
                color: ForegroundColor,
                textShadow: `0 .5vh 0.5vh ${ForegroundColor}${
                  (ForegroundColor.length == 4 && '3') ||
                  (ForegroundColor.length == 7 && '33')
                }`,
              }}
            >
              {line}
            </label>
          ))}
        </div>
      </div>
    </Content>
  );
}
export default Parrafo;
