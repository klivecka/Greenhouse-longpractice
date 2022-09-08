// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState } from "react";

export const ClimateContext = createContext();

export default function ClimateProvider({ children }) {
    const [temperature, setTemperature] = useState(50);

    return (
        <ClimateContext.Provider
            value={{
                temperature,
                setTemperature,
            }}
        >
            {children}
        </ClimateContext.Provider>
    );
}
