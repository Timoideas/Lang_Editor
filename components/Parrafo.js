import style from './Parrafo.module.css';
import { Content } from './Resources/Timoideas';
function Parrafo() {
  return (
    <Content center flex={1}>
      <div className={style.ParrafoContainer}>
        <p className={style.Parrafo}>
          {/* Map */}
          <label className={style.Frase}>Привет Oлеся 👋</label>
        </p>
      </div>
    </Content>
  );
}
export default Parrafo;
