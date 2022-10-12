import ButtonPrimary from "components/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import oroArtWhite from "public/assets/oroArt-white.svg";
import { BsChevronDoubleDown, BsFillMoonFill } from "react-icons/bs";
import { switchBg } from "./switchBg";
const HeroSection = () => {
	return (
		<>
			<section className=" container relative z-30 flex h-[85vh] flex-col content-center items-center justify-center text-center">
				<h1 className="  text-4xl font-bold md:text-6xl lg:text-7xl">
					Invest Safe <br /> &nbsp; &nbsp; &nbsp; &nbsp; Invest
					<span span className="text-primaryOrange">
						&nbsp;ORO
					</span>
				</h1>
				<p className="my-7  lg:text-lg">
					Our Cyclical Analysis For Timing & Value Makes Us Unique
					<br />
					<strong>
						Make The Right Investment In The Right Place
					</strong>
				</p>

				<Link href="/contact" passHref>
					<div>
						<ButtonPrimary className="mx-auto">
							{"Let's Get In Touch"}
						</ButtonPrimary>
					</div>
				</Link>

				<BsChevronDoubleDown className="absolute bottom-[7%] animate-bounce text-6xl text-primaryOrange" />
			</section>

			<div className=" absolute top-[20%] right-[0px] -z-10 bg-fixed	 pl-10 opacity-70 dark:z-10">
				{/* <Image src={oroArtWhite} alt="ORO ART" objectFit="cover" /> */}
				{switchBg()}
			</div>
		</>
	);
};
export default HeroSection;
