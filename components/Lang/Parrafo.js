import style from './Parrafo.module.css';
import { Content } from 'components/Resources/Timoideas';
function Parrafo() {
  return (
    <Content center flex={1}>
      <div className={style.ParrafoContainer}>
        <div className={style.Smoke}>
          <div></div>
          <div></div>
        </div>
        <div className={style.Parrafo}>
          {/* Map */}
          <label className={style.Frase}>Hola Olesya, ¿Cómo estás?</label>
          <label className={style.Frase}>
            If you're using Bootstrap, it has an "unstyled" class:
          </label>
          <label className={style.Frase}>
            Actually, this answer is exactly what I was looking for
          </label>
          <label className={style.FraseI}>Привет Oлеся 👋</label>
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
