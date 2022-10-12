import CircleCard from "components/CircleCard";
import Image from "next/image";
import rImg from "public/assets/r.svg";
const Solutions = () => {
	return (
		<section id="targetMarket" className=" container">
			<h2 className="text-3xl font-bold">
				What is{" "}
				<span className="text-primaryOrange">our solutions?</span>
			</h2>
			<div className="mt-4 flex flex-col items-center justify-center gap-10 md:flex-row  md:gap-7">
				<CircleCard
					title="ORO"
					subtitle="Wealth Program"
					text="Diversify investments according to persona for clients & institutions"
				/>
				<Image alt="oro R art" src={rImg} height={288} />
				<CircleCard
					title="ORO"
					subtitle="Advisory Program"
					text="Investment advisory and direct access to opportunities for clients and institutions"
				/>
			</div>
		</section>
	);
};
export default Solutions;
