import ButtonPrimary from "components/ButtonPrimary";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import oroArtBlack from "public/assets/oroArt-black.svg";
import oroArtWhite from "public/assets/oroArt-white.svg";
import { BsChevronDoubleDown, BsFillMoonFill } from "react-icons/bs";
const HeroSection = () => {
	const { theme } = useTheme();
	return (
		<>
			<section className=" container relative z-30 flex h-[85vh] flex-col content-center items-center justify-center text-center">
				<h1 className="  text-4xl font-bold md:text-6xl lg:text-7xl">
					Invest Safe <br /> &nbsp; &nbsp; &nbsp; &nbsp; Invest
					<span className="text-primaryOrange">&nbsp;ORO</span>
				</h1>
				<p className="my-7  lg:text-lg">
					Our Cyclical Analysis for timing & value makes us unique
					<br />
					<strong>
						Make the right investment in the right place
					</strong>
				</p>

				<Link href="#contact" passHref>
					<div>
						<ButtonPrimary className="mx-auto">
							{"Let's Get In Touch"}
						</ButtonPrimary>
					</div>
				</Link>

				<BsChevronDoubleDown className="absolute bottom-[7%] animate-bounce text-6xl text-primaryOrange" />
			</section>

			<div className=" absolute top-[20%] right-[0px] -z-10 bg-fixed	 pl-10 opacity-70 dark:z-10">
				{theme === "light" ? (
					<Image src={oroArtBlack} alt="ORO ART" objectFit="cover" />
				) : (
					<Image src={oroArtWhite} alt="ORO ART" objectFit="cover" />
				)}
			</div>
		</>
	);
};
export default HeroSection;
