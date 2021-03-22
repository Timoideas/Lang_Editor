import { useEffect, useState } from 'react';
import { Emergente } from 'components/Resources/Timoideas';
import style from './Header.module.css';
import EmergenteLanguages from 'components/emergentes/EmergenteLanguages';
function Header({ langChars, setLangChars }) {
  let ChinesseChars = [
    ['安', 'ān', 'false'],
    ['吧', 'ba', 'false'],
    ['八', 'bā', 'false'],
    ['爸', 'bā', 'false'],
    ['百', 'bǎi', 'false'],
    ['北', 'běi', 'false'],
    ['不', 'bú', 'false'],
    ['大', 'dài', 'false'],
    ['岛', 'dǎo', 'false'],
    ['的', 'dí', 'false'],
    ['弟', 'dì', 'false'],
    ['地', 'de', 'false'],
    ['东', 'dōng', 'false'],
    ['都', 'dōu', 'false'],
    ['对', 'duì', 'false'],
    ['多', 'duō', 'false'],
    ['儿', 'ér', 'false'],
    ['二', 'èr', 'false'],
    ['方', 'fāng', 'false'],
    ['港', 'gǎng', 'false'],
    ['哥', 'gē', 'false'],
    ['个', 'gè', 'false'],
    ['关', 'guān', 'false'],
    ['贵', 'guì', 'false'],
    ['国', 'guó', 'false'],
    ['过', 'guò', 'false'],
    ['海', 'hǎi', 'false'],
    ['好', 'hǎo', 'false'],
    ['很', 'hěn', 'false'],
    ['会', 'huì', 'false'],
    // ['家', 'jiā', 'false'],
    // ['见', 'jiàn', 'false'],
    // ['叫', 'jiào', 'false'],
    // ['姐', 'jiě', 'false'],
    // ['京', 'jīng', 'false'],
    // ['九', 'jiǔ', 'false'],
    // ['可', 'kě', 'false'],
    // ['老', 'lǎo', 'false'],
    // ['李', 'lǐ', 'false'],
    // ['零', 'líng', 'false'],
    // ['六', 'liù', 'false'],
    // ['吗', 'ma', 'false'],
    // ['妈', 'mā', 'false'],
    // ['么', 'me', 'false'],
    // ['没', 'méi', 'false'],
    // ['美', 'měi', 'false'],
    // ['妹', 'mèi', 'false'],
    // ['们', 'men', 'false'],
    // ['名', 'míng', 'false'],
    // ['明', 'míng', 'false'],
    // ['哪', 'nǎ', 'false'],
    // ['那', 'nà', 'false'],
    // ['南', 'nán', 'false'],
    // ['你', 'nǐ', 'false'],
    // ['您', 'nín', 'false'],
    // ['朋', 'péng', 'false'],
    // ['七', 'qī', 'false'],
    // ['起', 'qǐ', 'false'],
    // ['千', 'qiān', 'false'],
    // ['去', 'qù', 'false'],
    // ['人', 'rén', 'false'],
    // ['认', 'rèn', 'false'],
    // ['日', 'rì', 'false'],
    // ['三', 'sān', 'false'],
    // ['上', 'shàng', 'false'],
    // ['谁', 'shéi', 'false'],
    // ['什', 'shén', 'false'],
    // ['生', 'shēng', 'false'],
    // ['师', 'shī', 'false'],
    // ['十', 'shí', 'false'],
    // ['识', 'shí', 'false'],
    // ['是', 'shì', 'false'],
    // ['四', 'sì', 'false'],
    // ['他', 'tā', 'false'],
    // ['她', 'tā', 'false'],
    // ['台', 'tái', 'false'],
    // ['天', 'tiān', 'false'],
    // ['湾', 'wān', 'false'],
    // ['万', 'wàn', 'false'],
    // ['王', 'wáng', 'false'],
    // ['我', 'wǒ', 'false'],
    // ['五', 'wǔ', 'false'],
    // ['西', 'xī', 'false'],
    // ['息', 'xí', 'false'],
    // ['系', 'xì', 'false'],
    // ['先', 'xiān', 'false'],
    // ['香', 'xiāng', 'false'],
    // ['想', 'xiǎng', 'false'],
    // ['小', 'xiǎo', 'false'],
    // ['谢', 'xiè', 'false'],
    // ['姓', 'xìng', 'false'],
    // ['休', 'xiū', 'false'],
    // ['学', 'xué', 'false'],
    // ['也', 'yě', 'false'],
    // ['一', 'yī', 'false'],
    // ['亿', 'yì', 'false'],
    // ['英', 'yīng', 'false'],
    // ['友', 'yǒu', 'false'],
    // ['月', 'yuè', 'false'],
    // ['再', 'zài', 'false'],
    // ['张', 'zhāng', 'false'],
    // ['这', 'zhè', 'false'],
    // ['中', 'zhōng', 'false'],
    // ['字', 'zì', 'false'],
  ];
  let RussianChars = [
    ['а', 'a', 'false'],
    ['б', 'b', 'false'],
    ['в', 'v', 'false'],
    ['г', 'g', 'false'],
    ['д', 'd', 'false'],
    ['ж', 'ž', 'false'],
    ['з', 'z', 'false'],
    ['и', 'i', 'false'],
    ['й', 'j', 'false'],
    ['к', 'k', 'false'],
    ['л', 'l', 'false'],
    ['м', 'm', 'false'],
    ['н', 'n', 'false'],
    ['о', 'o', 'false'],
    ['п', 'p', 'false'],
    ['р', 'r', 'false'],
    ['с', 's', 'false'],
    ['т', 't', 'false'],
    ['у', 'u', 'false'],
    ['ф', 'f', 'false'],
    ['х', 'h', 'false'],
    ['ц', 'c', 'false'],
    ['ч', 'č', 'false'],
    ['ш', 'š', 'false'],
    ['щ', 'ŝ', 'false'],
    ['ы', 'y', 'false'],
    ['ю', 'û', 'false'],
    ['я', 'ia', 'false'],
    ['ъʺ', 'ьʹ'],
    ['э', 'e'],
  ];
  const [EmergenteLanguageState, setEmergenteLanguageState] = useState(false);
  const toggleEmergenteLanguageState = () => {
    setEmergenteLanguageState(!EmergenteLanguageState);
  };
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
    toggleEmergenteLanguageState();
  };
  return (
    <div className={style.Header}>
      <Emergente
        child={<EmergenteLanguages />}
        active={[EmergenteLanguageState, toggleEmergenteLanguageState, true]}
        position={[null, null, 2, null]}
      >
        <div
          className={style.LanguagesSelected}
          onClick={toggleEmergenteLanguageState}
        >
          <h2 className={style.LanguageActive}>Español</h2>
          <label className={style.LanguageNative}>{langChars.lang}</label>
        </div>
      </Emergente>
    </div>
  );
}
export default Header;
