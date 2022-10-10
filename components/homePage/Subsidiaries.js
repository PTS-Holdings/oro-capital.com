import Image from "next/image";
import capitalLogoBlack from "public/assets/capitalLogo-black.svg";
import partnersLogoBlack from "public/assets/partnerslogo-black.svg";
import ventureLogoBlack from "public/assets/ventureLogo-black.svg";

const Subsidiaries = () => {
	return (
		<section className="container flex w-full flex-wrap items-center justify-between">
			<h2 className=" pr-16 text-3xl font-bold">
				Our <span className="text-primaryOrange">Subsidiaries </span>
			</h2>
			<div className="mx-auto w-2/3">
				<div className="mx-auto flex w-1/2 justify-center py-8 md:p-8">
					<Image
						alt="ORO capital logo"
						height={95}
						src={capitalLogoBlack}
					/>
				</div>

				<div className="flex justify-between">
					<div className="flex w-1/2 justify-center px-2 md:p-8">
						<Image
							alt="oro partners logo"
							src={partnersLogoBlack}
							height={95}
						/>
					</div>

					<div className=" flex w-1/2 justify-center px-2  md:p-8">
						<Image
							alt="oro venture laps logo"
							height={95}
							src={ventureLogoBlack}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Subsidiaries;
