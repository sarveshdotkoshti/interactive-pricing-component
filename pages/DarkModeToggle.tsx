import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded mt-0 absolute top-5 right-8"
    >
       {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default DarkModeToggle;
