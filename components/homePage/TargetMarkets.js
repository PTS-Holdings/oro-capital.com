import CircleCard from "components/CircleCard";

const TargetMarkets = () => {
	return (
		<section id="targetMarket" className=" container">
			<h2 className="text-3xl font-bold">
				Our Target <span className="text-primaryOrange">Markets</span>
			</h2>
			<div className="mt-4 flex flex-col items-center justify-center gap-10 md:flex-row  md:gap-7">
				<CircleCard
					title="Capital Markets"
					text="Support in trading commodities, forex, indices & stocks"
				/>
				<CircleCard
					title="Startups"
					text="Opportunity to build a portfolio in startups through our affiliate Oro Partners"
				/>
				<CircleCard
					title="Private Equity Opportunities"
					text="Direct access to attractive opportunities in insurance, real estate, supply chain, & much more"
				/>
			</div>
		</section>
	);
};
export default TargetMarkets;
