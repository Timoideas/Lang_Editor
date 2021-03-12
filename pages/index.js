import style from 'styles/css/Index.module.css';
import { Header_Main } from 'heads/Header_Main';
import { Body, Section, Content } from 'components/Resources/Timoideas';
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
            <div className={style.Footer}>
              <div className={style.Timodieas}>Timoideas</div>
              <div className={style.Configuracion}>
                <div className={style.ConfigButtomContainer}>
                  <div className={style.Emergente}></div>
                  <buttom className={style.ConfigButtom}>C</buttom>
                </div>
                <div className={style.ConfigButtomContainer}>
                  <div className={style.Emergente}></div>
                  <buttom className={style.ConfigButtom}>K</buttom>
                </div>
                <div className={style.ConfigButtomContainer}>
                  <div className={style.Emergente}></div>
                  <buttom className={style.ConfigButtom}>M</buttom>
                </div>
              </div>
              <div></div>
            </div>
          </Content>
        </Section>
      </Body>
    </>
  );
  // Crear un <Emergente> que con un identificador no se choque con los de su tipo. se abre en 4 coordenadas
}
