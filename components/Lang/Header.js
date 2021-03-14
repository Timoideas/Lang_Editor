import { useEffect, useState } from 'react';
import Emergente from 'components/Emergente';
import style from './Header.module.css';
function Header({ langChars, setLangChars }) {
  const [ActiveEmergente, setActiveEmergente] = useState(false);
  let ChinesseChars = [
    ['安', 'ān'],
    ['吧', 'ba'],
    ['八', 'bā'],
    ['爸', 'bā'],
    ['百', 'bǎi'],
    ['北', 'běi'],
    ['不', 'bú'],
    ['大', 'dài'],
    ['岛', 'dǎo'],
    ['的', 'dí'],
    ['弟', 'dì'],
    ['地', 'de'],
    ['东', 'dōng'],
    ['都', 'dōu'],
    ['对', 'duì'],
    ['多', 'duō'],
    ['儿', 'ér'],
    ['二', 'èr'],
    ['方', 'fāng'],
    ['港', 'gǎng'],
    ['哥', 'gē'],
    ['个', 'gè'],
    ['关', 'guān'],
    ['贵', 'guì'],
    ['国', 'guó'],
    ['过', 'guò'],
    ['海', 'hǎi'],
    ['好', 'hǎo'],
    ['很', 'hěn'],
    ['会', 'huì'],
    // ['家', 'jiā'],
    // ['见', 'jiàn'],
    // ['叫', 'jiào'],
    // ['姐', 'jiě'],
    // ['京', 'jīng'],
    // ['九', 'jiǔ'],
    // ['可', 'kě'],
  ];
  let RussianChars = [
    ['а', 'a'],
    ['б', 'b'],
    ['в', 'v'],
    ['г', 'g'],
    ['д', 'd'],
    ['е', 'e'],
    ['ё', 'ë'],
    ['ж', 'ž'],
    ['з', 'z'],
    ['и', 'i'],
    ['й', 'j'],
    ['к', 'k'],
    ['л', 'l'],
    ['м', 'm'],
    ['н', 'n'],
    ['о', 'o'],
    ['п', 'p'],
    ['р', 'r'],
    ['с', 's'],
    ['т', 't'],
    ['у', 'u'],
    ['ф', 'f'],
    ['х', 'h'],
    ['ц', 'c'],
    ['ч', 'č'],
    ['ш', 'š'],
    ['щ', 'ŝ'],
    ['ы', 'y'],
    ['ю', 'û'],
    ['я', 'â'],
    // ['ъʺ', 'ьʹ'],
    // ['э', 'è'],
  ];
  useEffect(() => {
    langChars.lang == '中文'
      ? setLangChars({ lang: '中文', chars: ChinesseChars, activeChars: [] })
      : setLangChars({
          lang: 'Pусский',
          chars: RussianChars,
          activeChars: [],
        });
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
