import { useEffect, useState } from 'react';
import style from './Emergente.module.css';
function Emergente({ position = '2vh', active = [true, () => {}], children }) {
  const [ShowEmergente, setShowEmergente] = useState(active[0]);
  useEffect(() => {
    setShowEmergente(active[0]);
  }, [active[0]]);
  const CloseEmergente = (e) => {
    if (e.target.className == 'Emergente_EmergenteContainer__3I7rX') {
      setShowEmergente(!ShowEmergente);
      setTimeout(() => {
        active[1]();
      }, 300);
    }
  };
  const delay = () => {
    setTimeout(() => {
      return 'none';
    }, 300);
  };
  return (
    <div
      className={[style.EmergenteContainer]}
      style={{
        display: ShowEmergente ? 'block' : 'none',
        animationDirection: ShowEmergente && 'normal',
        margin: position,
      }}
      onClick={CloseEmergente}
    >
      {children}
    </div>
  );
}
export default Emergente;
