import CircleCard from "components/CircleCard";

const Team = () => {
	return (
		<section className=" container md:px-8" id="team">
			<h2 className="mb-8 text-3xl font-bold ">
				About Our <span className="text-primaryOrange">Team</span>
			</h2>
			<div className="mt-4 flex  flex-wrap items-center justify-center gap-10 md:flex-row md:gap-7">
				<CircleCard text="PHD holders" />
				<CircleCard text="Certified from well recognized international entities" />
				<CircleCard text="Valuation analysts" />
				<CircleCard text="Recognized on global ranks" />
				<CircleCard text="Diversified expertise" />
				<CircleCard text="Certified asset managers" />
				<CircleCard text="Recognized financial modelers" />
				<CircleCard text="Expertise and certification CFTe" />
			</div>
		</section>
	);
};

export default Team;
