import CircleCard from "components/CircleCard";

const Team = () => {
	return (
		<section className=" container md:px-8">
			<h2 className="mb-8 text-3xl font-bold text-primaryOrange">
				Our Team
			</h2>
			<div className="mt-4 flex  flex-wrap items-center justify-center gap-10 md:flex-row md:gap-7">
				<CircleCard text="PHD holders" />
				<CircleCard text="Certified from well recognized international entities" />
				<CircleCard text="Valuation Analysis" />
				<CircleCard text="Recognized on global ranks" />
				<CircleCard text="Diversified expertise" />
				<CircleCard text="Certified asset managers" />
				<CircleCard text="Recognized Financial Modelers" />
				<CircleCard text="Expertise and certification Exp. CFT, CETA" />
			</div>
		</section>
	);
};

export default Team;
