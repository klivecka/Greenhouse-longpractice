import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";
import { useContext } from "react";
import { useTheme } from "../../context/ThemeContext";


import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";

function Greenhouse() {
    const { themeName, setThemeName } = useTheme();
    let themeImg
    (themeName === "night") ? themeImg = nightImage : themeImg = dayImage

    return (
        <section>
            <img className="greenhouse-img" src={themeImg} alt="greenhouse" />
            <LightSwitch />
            <ClimateStats />
        </section>
    );
}

export default Greenhouse;
