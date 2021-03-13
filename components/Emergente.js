import style from './Emergente.module.css';
function Emergente({ position, active = [true, () => {}], children }) {
  return (
    <div className={style.Emergente} style={{ opacity: active[0] && 1 }}>
      {children}
    </div>
  );
}
export default Emergente;
