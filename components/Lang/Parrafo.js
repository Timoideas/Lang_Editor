import style from './Parrafo.module.css';
import { Content, Modal } from 'components/Resources/Timoideas';
import { useEffect, useState } from 'react';
import ModalClipBoardPreferences from 'components/modales/ModalClipBoardPreferences';
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

  // Renueva PasteData cuando hay nuevo texto en el ClipBoard
  useEffect(() => {
    const clip = async () => {
      let data = (await navigator.clipboard.readText()).split('\n');
      const dataa = data.map((line) => line.replaceAll('l', 'л'));
      if (data !== PasteData) {
        setPasteData(dataa);
      }
    };
    Blur && clip();
  }, [Blur]);

  useEffect(() => {
    let data;
    const clip = async () => {
      data = (await navigator.clipboard.readText()).split('\n');
    };
    clip();
    window.onfocus = () => {
      if (PasteData !== data) {
        console.log('hola mundo');
        setPasteData(data);
        // setModalAutomaticPaste(true);
        setBlur(true);
      } else {
        setBlur(false);
      }
    };
    window.onblur = () => {
      // setModalAutomaticPaste(false);
      setBlur(false);
    };
  }, []);

  return (
    // Agregar opcion para que no se cierre automáticamente Modal
    <Content center flex={1} style={{ background: BackgroundColor }}>
      <ModalClipBoardPreferences PasteData={PasteData} />
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
