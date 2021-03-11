import style from "styles/css/Index.module.css";
import { Header_Main } from "heads/Header_Main";
import { Body, Section, Content } from "components/Resources/Timoideas";
export default function Index() {
  return (
    <>
      <Header_Main />
      <Body>
        <Section size={1}>
          <Content center flex={0.5}>
            <h1 className={style.Title}>Lang Editor</h1>
            <p className={style.Title}>by Timoideas</p>
          </Content>
        </Section>
      </Body>
    </>
  );
}
