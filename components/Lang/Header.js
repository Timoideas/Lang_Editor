import { useState } from 'react';
import Emergente from 'components/Emergente';
import style from './Header.module.css';
function Header() {
  const [ActiveEmergente, setActiveEmergente] = useState(false);
  const [Lang, setLang] = useState('中文');
  const handlerLanguage = (lang) => {
    setLang(lang);
    toggleActiveEmergente();
  };
  const toggleActiveEmergente = () => {
    setActiveEmergente(!ActiveEmergente);
  };
  return (
    <div className={style.Header}>
      <Emergente active={[ActiveEmergente, toggleActiveEmergente]}>
        <div className={style.Languages}>
          <label
            onClick={() => {
              handlerLanguage('中文');
            }}
          >
            中文
          </label>
          <label
            onClick={() => {
              handlerLanguage('Pусский');
            }}
          >
            Pусский
          </label>
        </div>
      </Emergente>
      <div className={style.LanguagesSelected} onClick={toggleActiveEmergente}>
        <h2 className={style.LanguageActive}>Español</h2>
        <label className={style.LanguageNative}>{Lang}</label>
      </div>
    </div>
  );
}
export default Header;
