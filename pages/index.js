import style from 'styles/css/Index.module.css';
import { Header_Main } from 'heads/Header_Main';
import { Body, Section, Content } from 'components/Resources/Timoideas';
import Footer from 'components/Footer';
import Parrafo from 'components/Parrafo';
export default function Index() {
  return (
    <>
      <Header_Main />
      <Body>
        <Section size={1}>
          <Content center flex={1}>
            <div className={style.Header}>
              <div className={style.Emergente}>
                <div className={style.Languages}>{/* mapeo */}</div>
              </div>
              <div className={style.LanguagesSelected}>
                <label className={style.LanguageNative}>Español</label>
                <h2 className={style.LanguageActive}>Pусский</h2>
              </div>
            </div>
            <Parrafo />
            <Footer />
          </Content>
        </Section>
      </Body>
    </>
  );
  // Crear un <Emergente> que con un identificador no se choque con los de su tipo. se abre en 4 coordenadas
}
