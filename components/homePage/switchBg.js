import { useTheme } from "next-themes";
import Image from "next/image";
import oroArtWhite from "public/assets/oroArt-white.svg";
export const switchBg = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	if (currentTheme === "dark") {
		return <Image src={oroArtWhite} alt="ORO ART" objectFit="cover" />;
	} else {
		return <Image src={oroArtWhite} alt="ORO ART" objectFit="cover" />;
	}
};
