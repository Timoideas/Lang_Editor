import { useState } from 'react';
import Emergente from './Emergente';
import style from './Header.module.css';
function Header() {
  const [ActiveEmergente, setActiveEmergente] = useState(false);
  const toggleActiveEmergente = () => {
    setActiveEmergente(!ActiveEmergente);
  };
  return (
    <div className={style.Header}>
      <Emergente active={[ActiveEmergente, toggleActiveEmergente]}>
        <div className={style.Languages}>{/* mapeo */}</div>
      </Emergente>
      <div className={style.LanguagesSelected}>
        <label className={style.LanguageNative} onClick={toggleActiveEmergente}>
          Español
        </label>
        <h2 className={style.LanguageActive}>Pусский</h2>
      </div>
    </div>
  );
}
export default Header;
