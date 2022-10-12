import Image from "next/image";
import Link from "next/link";
import oroLogoWhite from "public/assets/capitalLogo-white.svg";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="w-full bg-brownDark py-16 text-white">
			<div className="container grid gap-8 border-b border-gray-500 md:grid-cols-3">
				<div>
					<div>
						<Image alt="oro capital logo" src={oroLogoWhite} />
					</div>
				</div>
				<div>
					<h2 className="mb-2 text-xl font-extrabold">
						Our Principle
					</h2>
					<ol className="font-light">
						<li>React logically, not emotionally</li>
						<li>Leverage compound interest</li>
						<li>Start early</li>
						<li>Stay invested</li>
						<li>Diversify</li>
					</ol>
				</div>
				<div>
					<h2 className="mb-2 text-xl font-extrabold">Contact Us</h2>

					<div className="mb-4">
						<h3 className=" text-lg font-semibold">Office</h3>
						<p className="flex items-center gap-2 font-light">
							<MdLocationOn /> Agora, El Louts, New Cairo
						</p>
					</div>

					<div className="mb-4">
						<h3 className="text-lg font-semibold">Email</h3>
						<p className="flex items-center gap-2 font-light">
							<MdEmail />
							Info@oro-capital.com
						</p>
					</div>

					<div className="mb-4">
						<h3 className="mb-2 text-lg font-semibold">
							Social media
						</h3>
						<div className="flex cursor-pointer gap-4 text-lg ">
							<Link
								href={"https://www.facebook.com/OROventuresLab"}
							>
								<ImFacebook2 />
							</Link>
							<Link
								href={
									"https://www.linkedin.com/company/oroventureslab/"
								}
							>
								<ImLinkedin />
							</Link>
						</div>
					</div>

					<div className="mb-8">
						<h3 className="text-lg font-semibold">Phone</h3>
						<p className="flex items-center gap-2 font-light">
							<MdPhone />
							+20 106 499 3381
						</p>
					</div>
				</div>
			</div>
			<div className="container mt-2 flex justify-between text-[12px] font-bold text-gray-300">
				<p>PTS INVESTMENT HOLDINGS</p>
				<p>ALL RIGHTS RECEIVED 2022 ®</p>
			</div>
		</footer>
	);
};

export default Footer;
