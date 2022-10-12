import Image from "next/image";
import img3 from "public/assets/jeshoots-com-chess-unsplash.jpg";
import img4 from "public/assets/kelly-sikkema-buy-sell-unsplash.jpg";
import img1 from "public/assets/plant-money.jpg";
import img2 from "public/assets/precondo-ca-Invesmet-unsplash.jpg";
const InfoGrid = () => {
	return (
		<section
			id="aboutUs"
			className="container flex flex-col gap-12 md:gap-20"
		>
			{/*------ ROW 1 ----- */}
			<div className="flex flex-col justify-center pt-8 md:flex-row md:items-center">
				<div className="mb-2 md:w-1/2">
					<p className="font-bold text-primaryOrange">
						ORO gives every dollar a job
					</p>
					<h2 className=" text-3xl font-extrabold lg:text-5xl">
						Who We Are ?
					</h2>
				</div>
				<div className={`text-lg md:w-1/2 md:pr-16`}>
					<p>
						We are the designed investment guide that establishes
						financial prosperity, creates sustainable economic
						gains, the hassle-free, smart experienced that allows
						entities and individuals to get closer to their goals.
					</p>
				</div>
			</div>

			{/*------ ROW 2 ----- */}
			<div className="flex flex-col  md:flex-row md:items-center">
				<div className=" text-2xl font-semibold md:w-1/2 md:pr-32 md:text-center">
					<h2>
						We focus on{" "}
						<span className="font-bold text-primaryOrange">
							long-term sustainability
						</span>{" "}
						and ensure it&apos;s embedded across our entire business
					</h2>
				</div>

				<div
					className={` relative mt-8 h-64 overflow-hidden rounded-xl md:w-1/3`}
				>
					<Image
						alt="Photo by micheile on Unsplash - Plant in pot of money"
						src={img1}
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>

			{/*------ ROW 3 ----- */}
			<div className="flex flex-col  md:flex-row md:items-center">
				<div className=" text-lg font-semibold md:w-1/2 md:pr-32 md:text-center">
					<h2>
						Creating an extraordinary culture of first movers,
						investment capitalist and entrepreneurial mindsets, one
						that creates a professional financial independent
						adjuster promoting in capital markets, private equity
						investment and start-up funding.
					</h2>
				</div>

				<div
					className={`relative mt-8 h-64 overflow-hidden rounded-xl md:w-1/3 `}
				>
					<Image
						alt="Photo by Precondo CA on Unsplash - Investment word on cubes"
						src={img2}
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>

			{/*------ ROW 4 ----- */}
			<div className="flex flex-col justify-center pt-8 md:flex-row md:items-center">
				<div className="mb-2 md:w-1/2 md:text-center">
					<h2 className=" text-2xl font-bold lg:text-3xl">
						<span className="font-extrabold text-primaryOrange">
							ORO Capital
						</span>{" "}
						is the solution
					</h2>
				</div>
				<div className={`text-lg md:w-1/2 md:pr-16`}>
					<p>
						We are here to offer your business the most flexible
						portfolio management and investment solution operating
						fully serviced for short-term and long-term investments.
						It is to ensure your personalized portfolio investment
						is managed seamlessly
					</p>
				</div>
			</div>

			{/*------ ROW 5 ----- */}
			<div className="flex flex-col-reverse justify-center md:flex-row md:items-center">
				<div
					className={`relative mt-8  h-64 overflow-hidden rounded-xl md:w-1/3 `}
				>
					<Image
						alt="Photo by JESHOOTS.COM on Unsplash - playing chess"
						src={img3}
						layout="fill"
						objectFit="cover"
					/>
				</div>

				<div className=" md:w-1/2 md:pl-32 ">
					<h2 className="mb-2 text-2xl font-bold">
						Why we&apos;re here
					</h2>
					<p>
						Financial institutions are not the most reliable, zero
						provision of support services, no technical basis, no
						investment guidance, so we offer you the solution for
						your portfolio management. Whether you want a capital
						market investment plan for your company&apos;s assets,
						budgeting plan, private equity investment or even a
						start-up fundraising.
					</p>
				</div>
			</div>

			{/*------ ROW 6 ----- */}
			<div className="flex flex-col-reverse justify-center md:flex-row md:items-center">
				<div
					className={` relative mt-8 h-64 overflow-hidden rounded-xl md:w-1/3 `}
				>
					<Image
						alt="Photo by Kelly Sikkema Unsplash - Buy Sell"
						src={img4}
						layout="fill"
						objectFit="cover"
					/>
				</div>

				<div className=" md:w-1/2 md:pl-32 ">
					<h2 className="mb-2 text-2xl font-bold">How we do it</h2>
					<p>
						By scouting and investigating the most promising
						projects and partnering up with several investment
						related entities, we deliver highly well-planned
						portfolio management services with the qualities of our
						support services and the provision of our cyclical
						analysis, so our clients will sustain secured financial
						regulation
					</p>
				</div>
			</div>
		</section>
	);
};

export default InfoGrid;
