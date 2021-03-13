import style from './Footer.module.css';
import { Timoideas } from './Resources/Timoideas';
function Footer() {
  return (
    <div className={style.Footer}>
      <div className={style.Configuracion}>
        <div className={style.ConfigButtomContainer}>
          <div className={style.Emergente}></div>
          <div className={`${style.ConfigButtom} ${style.Color}`}>
            <div>
              <div className={style.Foreground}></div>
              <div className={style.Background}></div>
            </div>
          </div>
        </div>
        <div className={style.ConfigButtomContainer}>
          <div className={style.Emergente}></div>
          <div className={`${style.ConfigButtom} ${style.Keyboard}`}>
            KEYBOARD
          </div>
        </div>
        <div className={style.ConfigButtomContainer}>
          <div className={style.Emergente}></div>
          <div className={`${style.ConfigButtom} ${style.Mode}`}>
            <div className={style.Prrf}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <Timoideas />
    </div>
  );
}
export default Footer;
