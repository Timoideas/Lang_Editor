import { useEffect, useState } from 'react';
import Emergente from 'components/Emergente';
import style from './Header.module.css';
function Header({ langChars, setLangChars }) {
  const [ActiveEmergente, setActiveEmergente] = useState(false);
  let ChinesseChars = [['nǐ', '你']];
  let RussianChars = [['г', 'g']];
  useEffect(() => {
    langChars.lang == '中文'
      ? setLangChars({ lang: '中文', chars: ChinesseChars, activeChars: [] })
      : setLangChars({ lang: 'Pусский', chars: RussianChars, activeChars: [] });
  }, [langChars.lang]);
  const handlerLanguage = (lang) => {
    lang == '中文'
      ? setLangChars({ lang: lang, chars: ChinesseChars, activeChars: [] })
      : setLangChars({ lang: lang, chars: RussianChars, activeChars: [] });
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
        <label className={style.LanguageNative}>{langChars.lang}</label>
      </div>
    </div>
  );
}
export default Header;
