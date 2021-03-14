import style from './Parrafo.module.css';
import { Content } from 'components/Resources/Timoideas';
import { useEffect, useState } from 'react';
function Parrafo({ mode }) {
  const [PasteData, setPasteData] = useState(['Paste your text 😀']);
  const [Scrolling, setScrolling] = useState(false);
  const [ScrollValue, setScrollValue] = useState(30);
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
      setPasteData(
        (e.clipboardData || window.clipboardData).getData('text').split('\n')
      );
    };
    window.addEventListener('paste', pasteHandler);
    return () => {
      window.removeEventListener('paste', pasteHandler);
    };
  }, [PasteData]);
  const [Blur, setBlur] = useState(true);
  useEffect(() => {
    const clip = async () => {
      const data = (await navigator.clipboard.readText()).split('\n');
      if (data) {
        setPasteData(data);
      }
    };
    Blur && clip();
  }, [Blur]);
  useEffect(() => {
    window.onfocus = () => {
      setBlur(true);
    };
    window.onblur = () => {
      setBlur(false);
    };
  }, []);
  return (
    <Content center flex={1}>
      <div className={style.ParrafoContainer}>
        <div className={style.Smoke}>
          <div
            style={{ opacity: mode ? 1 : 0 }}
            onTouchEnd={() => {
              setScrollValue(ScrollValue + 7.5);
            }}
            onClick={() => {
              setScrollValue(ScrollValue + 7.5);
            }}
            onDoubleClick={() => {
              // Corregir
              setScrollValue(30);
            }}
          />
          <div
            style={{ opacity: mode ? 1 : 0 }}
            onTouchEnd={() => {
              setScrollValue(ScrollValue - 7.5);
            }}
            onClick={() => {
              setScrollValue(ScrollValue - 7.5);
            }}
            onDoubleClick={() => {
              setScrollValue(-30);
            }}
          />
        </div>
        <div
          className={style.Parrafo}
          style={{
            overflowY: Scrolling ? 'hidden' : 'scroll',
            top: ScrollValue + 'vh',
          }}
        >
          {PasteData.map((line, index) => (
            <label key={index} className={style.FraseI}>
              {line}
            </label>
          ))}
        </div>
      </div>
    </Content>
  );
}
export default Parrafo;
