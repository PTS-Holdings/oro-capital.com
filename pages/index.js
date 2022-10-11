import CircleCard from "components/CircleCard";
import Faq from "components/homePage/Faq";
import GlobalMap from "components/homePage/GlobalMap";
import HeroSection from "components/homePage/HeroSection";
import Solutions from "components/homePage/Solutions";
import Subsidiaries from "components/homePage/Subsidiaries";
import TargetMarkets from "components/homePage/TargetMarkets";
import Team from "components/homePage/Team";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
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
			<ThemeProvider attribute="class">
				<div className=" dark:bg-neutral-800 dark:text-white">
					<HeroSection />
					<Team />
					<GlobalMap />
					<Subsidiaries />
					<TargetMarkets />
					<Solutions />
					<Faq />
				</div>
			</ThemeProvider>
		</>
	);
}
