import Accordion from "components/Accordion";

const Faq = () => {
	return (
		<section className="container 	">
			<h2 className=" mb-4 pr-16 text-3xl font-bold text-primaryOrange ">
				FAQ
			</h2>
			<Accordion
				title="What type of asset classes do you invest in?"
				text="We are open to manage available asset classes in the capital markets including trading forex, commodities, 
				indices, stocks, access to ETFs ..etc. Also we grant access for angel investment in startups and have access to many private equity opportunity."
			/>

			<Accordion
				title="How clients and financial institutions can make use of investment decision and trading tools in Oro
                Capital?"
				text="Clients and financial institutions can join in Oro wealth program so that they get the support from
                our talented team, structured decision making process, and our systems to manage their portfolio.
                portfolio segregation is based on the investor persona, risk appetite, and investment cycle preference."
			/>
		</section>
	);
};

export default Faq;
