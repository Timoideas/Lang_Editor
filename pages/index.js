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
              <label className={style.Title}>Español</label>
              <h1 className={style.Title}>Pусский</h1>
            </div>
            <Content center flex={1}>
              <p className={style.Title}>Lang Editor</p>
            </Content>
            <div className={style.Footer}>
              <buttom className={style.Title}>Color</buttom>
              <buttom className={style.Title}>Keyboard</buttom>
              <buttom className={style.Title}>Mode</buttom>
            </div>
          </Content>
        </Section>
      </Body>
    </>
  );
}
