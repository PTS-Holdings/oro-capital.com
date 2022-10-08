import Image from "next/image";
import oroCapitalBlackLogo from "public/assets/capitalLogo-black.svg";
import { NavLinks } from "./navLinks";

import { BsFillMoonFill } from "react-icons/bs";

export const Navbar = () => {
	return (
		<nav className=" py-5 ">
			<div className="container mx-auto flex content-center justify-between">
				<div className="my-auto">
					<Image
						alt="Oro Capital Logo"
						src={oroCapitalBlackLogo}
						height={50}
						width={90}
					/>
				</div>

				<ul className="flex content-center items-center gap-5">
					{NavLinks.map((navLink) => (
						<li key={navLink.link}>
							<a href={navLink.link}>
								{navLink.displayName}
							</a>
						</li>
					))}
					<BsFillMoonFill />
				</ul>
			</div>
		</nav>
	);
};
