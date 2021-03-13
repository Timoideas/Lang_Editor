import Emergente from './Emergente';
import style from './Header.module.css';
function Header() {
  const [ActiveEmergente, setActiveEmergente] = usestate();
  const toggleActiveEmergente = () => {
    setActiveEmergente(!ActiveEmergente);
  };
  return (
    <div className={style.Header}>
      <Emergente active={[true, toggleActiveEmergente]}>
        <div className={style.Languages}>{/* mapeo */}</div>
      </Emergente>
      <div className={style.LanguagesSelected}>
        <label className={style.LanguageNative}>Español</label>
        <h2 className={style.LanguageActive}>Pусский</h2>
      </div>
    </div>
  );
}
export default Header;
