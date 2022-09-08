import './LightSwitch.css';
import { useTheme } from "../../context/ThemeContext";

function LightSwitch() {
  const { themeName, setThemeName } = useTheme()
  function changeToDay() {
    return setThemeName("day")
  }
  function changeToNight() {
    return setThemeName("night")
  }
  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick = {changeToDay}>DAY</div>
      <div className="off" onClick = {changeToNight}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;