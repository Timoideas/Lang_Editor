import style from './Parrafo.module.css';
import { Content } from './Resources/Timoideas';
function Parrafo() {
  return (
    <Content center flex={1}>
      <div className={style.ParrafoContainer}>
        <p className={style.Parrafo}>
          {/* Map */}
          <h1 className={style.Frase}>Привет Oлеся 👋</h1>
        </p>
      </div>
    </Content>
  );
}
export default Parrafo;
