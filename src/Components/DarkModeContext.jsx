// import { createContext, useContext, useEffect, useState } from "react";

// const DarkModeContext = createContext();

// export const useDarkMode = () => useContext(DarkModeContext);

// export const DarkModeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     const saved = localStorage.getItem("theme");
//     return saved ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
//   });

//   useEffect(() => {
//     if (darkMode === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", darkMode);
//   }, [darkMode]);

//   const toggleDarkMode = () =>
//     setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };
