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
        setScrollValue(ScrollValue + 7.4);
        return;
      }
      switch (e.key) {
        case 'Enter':
          setScrollValue(ScrollValue - 7.4);
          break;
        case 'w':
          setScrollValue(ScrollValue + 7.4);
          break;
        case 's':
          setScrollValue(ScrollValue - 7.4);
          break;
        default:
          break;
      }
    };
    window.addEventListener('keypress', KeyHandler);
    return () => {
      window.removeEventListener('keypress', KeyHandler);
    };
  }, [ScrollValue]);
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
  return (
    <Content center flex={1}>
      <div className={style.ParrafoContainer}>
        <div className={style.Smoke}>
          <div style={{ opacity: mode ? 1 : 0 }} />
          <div style={{ opacity: mode ? 1 : 0 }} />
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
