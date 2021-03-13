import style from './Footer.module.css';
function Footer() {
  return (
    <div className={style.Footer}>
      <div className={style.Timodieas}>
        <img
          alt='Imagen Alternativa'
          className={style.TimoideasLogo}
          src='images/Timoideas.png'
        />
      </div>
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
          <div className={`${style.ConfigButtom} ${style.Keyboard}`}></div>
        </div>
        <div className={style.ConfigButtomContainer}>
          <div className={style.Emergente}></div>
          <div className={`${style.ConfigButtom} ${style.Mode}`}>
            <div className={style.Prrf}></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default Footer;
