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
          <buttom className={style.ConfigButtom}>C</buttom>
        </div>
        <div className={style.ConfigButtomContainer}>
          <div className={style.Emergente}></div>
          <buttom className={style.ConfigButtom}>K</buttom>
        </div>
        <div className={style.ConfigButtomContainer}>
          <div className={style.Emergente}></div>
          <buttom className={style.ConfigButtom}>M</buttom>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default Footer;
