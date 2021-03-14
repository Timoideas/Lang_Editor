import style from 'styles/css/Index.module.css';
import { Header_Main } from 'heads/Header_Main';
import { Body, Section, Content } from 'components/Resources/Timoideas';
import Footer from 'components/Lang/Footer';
import Parrafo from 'components/Lang/Parrafo';
import Header from 'components/Lang/Header';
import { useState } from 'react';
export default function Index() {
  const [BackgroundColor, setBackgroundColor] = useState('#ADE7AD');
  const [ForegroundColor, setForegroundColor] = useState('#FAFAFA');
  const [ModeActive, setModeActive] = useState(true);
  const handlerMode = () => {
    setModeActive(!ModeActive);
  };
  const [langChars, setLangChars] = useState({
    lang: 'Pусский',
    chars: [],
    activeChars: [''],
  });
  const [Keys, setKeys] = useState(['л']);
  const addKey = (key) => {
    let KeyList = Keys;
    KeyList.push(key);
    setKeys(KeyList);
  };
  return (
    <>
      <Header_Main />
      <Body>
        <Section size={1}>
          <Content bg center flex={1} className={style.Contenedor}>
            <Header langChars={langChars} setLangChars={setLangChars} />
            <Parrafo
              mode={ModeActive}
              keys={Keys}
              langChars={langChars}
              ForegroundColor={ForegroundColor}
              BackgroundColor={BackgroundColor}
            />
            <Footer
              mode={ModeActive}
              addKey={addKey}
              toggleMode={handlerMode}
              langChars={langChars}
              setLangChars={setLangChars}
              ForegroundColor={ForegroundColor}
              BackgroundColor={BackgroundColor}
              setBackgroundColor={setBackgroundColor}
              setForegroundColor={setForegroundColor}
            />
          </Content>
        </Section>
      </Body>
    </>
  );
  // Crear un <Emergente> que con un identificador no se choque con los de su tipo. se abre en 4 coordenadas
}
