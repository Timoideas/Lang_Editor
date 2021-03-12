import style from 'styles/css/Index.module.css';
import { Header_Main } from 'heads/Header_Main';
import { Body, Section, Content } from 'components/Resources/Timoideas';
import Footer from 'components/Footer';
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
            <Content center flex={1}>
              <div className={style.ParrafoContainer}>
                <p className={style.Parrafo}>
                  {/* Map */}
                  <label className={style.Frase}>
                    Type or paste your text here
                  </label>
                </p>
              </div>
            </Content>
            <Footer />
          </Content>
        </Section>
      </Body>
    </>
  );
  // Crear un <Emergente> que con un identificador no se choque con los de su tipo. se abre en 4 coordenadas
}
