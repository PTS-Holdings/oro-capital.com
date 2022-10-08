import Navbar from "components/Navbar";
import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Oro Capital - Invest Safe Invest ORO</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			
			<section>
				<h1>Invest Safe <br/> Invest Oro</h1>
			</section>
		</div>
	);
}
