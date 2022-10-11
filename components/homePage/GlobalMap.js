import Image from "next/image";
import mapImg from "public/assets/map.png";

const GlobalMap = () => {
	return (
		<section className="bg-[#F5F5F5] py-16 dark:bg-neutral-800">
			<div className="container flex w-full flex-wrap items-center justify-between gap-8">
				<div>
					<h2 className="mb-4 text-3xl font-bold">
						Our{" "}
						<span className="text-primaryOrange">
							Global Presence
						</span>
					</h2>
					<ol className="ml-4">
						<li className="mb-1">● United Kingdom</li>
						<li className="mb-1">● United States</li>
						<li className="mb-1">● Egypt</li>
					</ol>
				</div>
				<div className="mx-auto">
					<Image alt="ORO Global Map" src={mapImg} />
				</div>
			</div>
		</section>
	);
};

export default GlobalMap;
