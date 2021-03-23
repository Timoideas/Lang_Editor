import { Modal } from 'components/Resources/Timoideas';
import { useEffect, useState } from 'react';
import style from './ModalClipBoardPreferences.module.css';
function ModalClipBoardPreferences({ PasteData }) {
  const [ModalClipboardState, setModalClipboardState] = useState(true);
  const toggleModalClipboardState = () => {
    setModalClipboardState(!ModalClipboardState);
  };
  // Configurar
  useEffect(() => {
    let data;
    const clip = async () => {
      data = (await navigator.clipboard.readText()).split('\n');
    };
    clip();
    window.onfocus = () => {
      if (PasteData !== data) {
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
  return (
    <Modal
      bg={'#0003'}
      center
      active={[ModalClipboardState, toggleModalClipboardState, true]}
      blur={1}
      transition={0.3}
    >
      <div className={style.ModalClipboardState}>
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
            <input type='checkbox' defaultChecked={false} />
            <div>No volver a mostrar</div>
          </div>
          <div className={style.CheckBox}>
            <input type='checkbox' defaultChecked={true} />
            <div>Siempre pegar automáticamente.</div>
          </div>
        </div>
        <button
          onClick={() => {
            setModalClipboardState(false);
          }}
        >
          Pegar de Portapapeles
        </button>
      </div>
    </Modal>
  );
}
export default ModalClipBoardPreferences;
