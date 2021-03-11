import style from "styles/css/Index.module.css";
import { Header_Main } from "heads/Header_Main";
import {
  Body,
  Section,
  Content,
  Footer,
  Header,
} from "components/Resources/Timoideas";
export default function Index() {
  return (
    <>
      <Header_Main />
      <Body>
        <Section size={1}>
          <Header center heigth={5} padding={0}>
            <label className={style.Title}>Español</label>
            <h1 className={style.Title}>Pусский</h1>
          </Header>
          <Section size={2}>
            <p className={style.Title}>Lang Editor</p>
          </Section>
          <Footer center flex={1} row className={style.Footer}>
            <buttom className={style.Title}>Color</buttom>
            <buttom className={style.Title}>Keyboard</buttom>
            <buttom className={style.Title}>Mode</buttom>
          </Footer>
        </Section>
      </Body>
    </>
  );
}
