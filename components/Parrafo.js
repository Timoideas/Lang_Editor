import style from './Parrafo.module.css';
import { Content } from './Resources/Timoideas';
function Parrafo() {
  return (
    <Content center flex={1}>
      <div className={style.ParrafoContainer}>
        <ul className={style.Parrafo}>
          {/* Map */}
          <li className={style.Frase}>Привет Oлеся 👋</li>
        </ul>
      </div>
    </Content>
  );
}
export default Parrafo;
