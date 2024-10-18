import { useEffect, useState } from "react";
import DarkMoodBtn from "../../assets/nav/dark-mode-button.png";
import LightMoodBtn from "../../assets/nav/light-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const element = document.documentElement; // Access to html element
    // console.log(element);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [element.classList, theme]);

    return (
        <div className="relative">
            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={LightMoodBtn} alt=""
                className={`w-12 cursor-pointer absolute transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`} />
            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={DarkMoodBtn} alt=""
                className={`w-12 cursor-pointer`} />
        </div>
    )
}

export default DarkMode