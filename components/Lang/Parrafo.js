import style from './Parrafo.module.css';
import { Content } from 'components/Resources/Timoideas';
import { useEffect, useState } from 'react';
function Parrafo({ mode }) {
  const [PasteData, setPasteData] = useState('');
  useEffect(() => {
    const pasteHandler = (e) => {
      setPasteData((e.clipboardData || window.clipboardData).getData('text'));
    };
    window.addEventListener('paste', pasteHandler);
    return () => {
      window.removeEventListener('paste', pasteHandler);
    };
  }, [PasteData]);
  useEffect(() => {}, [mode]);
  return (
    <Content center flex={1}>
      <div className={style.ParrafoContainer}>
        <div className={style.Smoke}>
          <div style={{ opacity: mode ? 1 : 0 }} />
          <div style={{ opacity: mode ? 1 : 0 }} />
        </div>
        <div className={style.Parrafo}>
          {/* Map */}
          <label className={style.Frase}>Hola Olesya, ¿Cómo estás?</label>
          <label className={style.Frase}>'try copy and paste here'</label>
          <label className={style.Frase}>Hola Olesya, ¿Cómo estás?</label>
          <label className={style.Frase}>'try copy and paste here'</label>
          <label className={style.Frase}>Hola Olesya, ¿Cómo estás?</label>
          <label className={style.Frase}>'try copy and paste here'</label>
          <label className={style.Frase}>
            Actually, this answer is exactly what I was looking for
          </label>
          <label className={style.FraseI}>
            Привет Oлеся 👋, {PasteData || 'Try paste your text here'}
          </label>
          <label className={style.Frase}>
            Be aware that inline css overrules css in files
          </label>
          <label className={style.Frase}>
            Be aware that inline css overrules css in files
          </label>
          <label className={style.Frase}>
            Be aware that inline css overrules css in files
          </label>
          <label className={style.Frase}>
            Be aware that inline css overrules css in files
          </label>
          <label className={style.Frase}>
            Be aware that inline css overrules css in files
          </label>
          <label className={style.Frase}>
            Be aware that inline css overrules css in files
          </label>
          <label className={style.Frase}>
            Este texto debería ser los uficientemente largo para ver si
            funcionaía en párrafos grandes, muy grandes
          </label>
        </div>
      </div>
    </Content>
  );
}
export default Parrafo;
