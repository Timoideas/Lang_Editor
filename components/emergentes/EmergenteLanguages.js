import style from './EmergenteLanguages.module.css';
function EmergenteLanguages() {
  return (
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
  );
}
export default EmergenteLanguages;
