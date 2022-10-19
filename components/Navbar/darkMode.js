import { useTheme } from "next-themes";
import { MdNightlight, MdWbSunny } from "react-icons/md";
export const ThemeChanger = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	if (currentTheme === "dark") {
		return (
			<button className="text-lg" onClick={() => setTheme("light")}>
				<MdWbSunny />
			</button>
		);
	} else {
		return (
			<button className="text-lg" onClick={() => setTheme("dark")}>
				<MdNightlight />
			</button>
		);
	}
};
