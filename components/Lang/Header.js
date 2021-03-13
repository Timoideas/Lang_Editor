import { useState } from 'react';
import Emergente from 'components/Emergente';
import style from './Header.module.css';
function Header() {
  const [ActiveEmergente, setActiveEmergente] = useState(false);
  const toggleActiveEmergente = () => {
    setActiveEmergente(!ActiveEmergente);
  };
  return (
    <div className={style.Header}>
      <Emergente active={[ActiveEmergente, toggleActiveEmergente]}>
        <div className={style.Languages}>
          <label>Español</label>
          <label>Chino</label>
          <label>Pусский</label>
        </div>
      </Emergente>
      <div className={style.LanguagesSelected} onClick={toggleActiveEmergente}>
        <label className={style.LanguageNative}>Pусский</label>
        <h2 className={style.LanguageActive}>Español</h2>
      </div>
    </div>
  );
}
export default Header;
