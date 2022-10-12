import Image from "next/image";
import capitalLogoBlack from "public/assets/capitalLogo-black.svg";
import partnersLogoBlack from "public/assets/partnerslogo-black.svg";
import ventureLogoBlack from "public/assets/ventureLogo-black.svg";
import capitalLogoWhite from "public/assets/capitalLogo-white.svg";
import partnersLogoWhite from "public/assets/partnerslogo-white.svg";
import ventureLogoWhite from "public/assets/ventureLogo-white.svg";
import { useTheme } from "next-themes";
const Subsidiaries = () => {
	const { theme } = useTheme();
	return (
		<section className="container flex w-full flex-wrap items-center justify-between">
			<h2 className=" pr-16 text-3xl font-bold">
				Our <span className="text-primaryOrange">Subsidiaries </span>
			</h2>
			<div className="mx-auto w-2/3">
				<div className="mx-auto flex w-1/2 justify-center py-8 md:p-8">
					{theme === "light" ? (
						<Image
							alt="ORO capital logo"
							height={95}
							src={capitalLogoBlack}
						/>
					) : (
						<Image
							alt="ORO capital logo"
							height={95}
							src={capitalLogoWhite}
						/>
					)}
				</div>

				<div className="flex justify-between">
					<div className="flex w-1/2 justify-center px-2 md:p-8">
						{theme === "light" ? (
							<Image
								alt="oro partners logo"
								src={partnersLogoBlack}
								height={95}
							/>
						) : (
							<Image
								alt="oro partners logo"
								src={partnersLogoWhite}
								height={95}
							/>
						)}
					</div>

					<div className=" flex w-1/2 justify-center px-2  md:p-8">
						{theme === "light" ? (
							<Image
								alt="oro venture laps logo"
								height={95}
								src={ventureLogoBlack}
							/>
						) : (
							<Image
								alt="oro venture laps logo"
								height={95}
								src={ventureLogoWhite}
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Subsidiaries;
