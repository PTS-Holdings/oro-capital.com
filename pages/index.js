import CircleCard from "components/CircleCard";
import BlogRoom from "components/homePage/BlogRoom";
import ContactForm from "components/homePage/ContactForm";
import Faq from "components/homePage/Faq";
import GlobalMap from "components/homePage/GlobalMap";
import HeroSection from "components/homePage/HeroSection";
import InfoGrid from "components/homePage/InfoGrid";
import Solutions from "components/homePage/Solutions";
import Subsidiaries from "components/homePage/Subsidiaries";
import TargetMarkets from "components/homePage/TargetMarkets";
import Team from "components/homePage/Team";
import Head from "next/head";
export default function Home() {
	return (
		<>
			<Head>
				<title>Oro Capital - Invest Safe Invest ORO</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeroSection />
			<div className="my-16 flex snap-y snap-start flex-col gap-32	">
				<InfoGrid />
				<Team />
				<GlobalMap />
				<Subsidiaries />
				<TargetMarkets />
				<Solutions />
				{/* <BlogRoom /> */}
				<Faq />
				<div id="contact">
					<ContactForm />
				</div>
			</div>
		</>
	);
}
