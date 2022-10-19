import { useTheme } from "next-themes";
import Image from "next/image";
import oroCapitalBlackLogo from "public/assets/capitalLogo-black.svg";
import oroCapitalWhiteLogo from "public/assets/capitalLogo-white.svg";
import { useState } from "react";
import { ThemeChanger } from "./darkMode";
import { NavLinks } from "./navLinks";
export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const { theme } = useTheme();
	return (
		<nav className=" py-5 dark:bg-neutral-800 ">
			<div className="flex content-center justify-between md:container ">
				<div className="my-auto ml-8 md:ml-0">
					{theme === "light" ? (
						<Image
							alt="Oro Capital Logo"
							src={oroCapitalBlackLogo}
							height={50}
							width={90}
						/>
					) : (
						<Image
							alt="Oro Capital Logo"
							src={oroCapitalWhiteLogo}
							height={50}
							width={90}
						/>
					)}
				</div>
				{/* Navigation Links */}
				<ul
					className={`absolute z-50  flex w-screen flex-col gap-6 overflow-hidden bg-white
					 transition-all duration-300 ease-in-out dark:bg-neutral-800 dark:text-white
					 md:static md:w-auto md:flex-row md:content-center md:items-center ${
							open ? "h-[90vh]} top-24" : "-top-96"
						}`}
				>
					{NavLinks.map((navLink) => (
						<li
							key={navLink.link}
							className="text-center"
							onClick={() => {
								setOpen(!open);
							}}
						>
							<a
								href={navLink.link}
								className="pb-4 hover:border-b"
							>
								{navLink.displayName}
							</a>
						</li>
					))}
					<li className="pb-4 text-center">{ThemeChanger()}</li>
				</ul>

				{/* hamburger button */}
				<div
					className="relative z-50 my-auto mr-8 flex h-7 w-7 flex-col items-center justify-between md:hidden "
					onClick={() => {
						setOpen(!open);
					}}
				>
					<span
						className={`h-1 w-full transform rounded-full  bg-gray-700 transition duration-300 ease-in-out dark:bg-slate-100 ${
							open ? "translate-y-3 rotate-45" : ""
						}`}
					/>
					<span
						className={`h-1 w-full rounded-full  bg-gray-700 transition-all duration-300 ease-in-out dark:bg-slate-100 ${
							open ? "w-0" : "w-full"
						}`}
					/>
					<span
						className={`h-1 w-full transform rounded-full  bg-gray-700 transition duration-300 ease-in-out dark:bg-slate-100 ${
							open ? "-translate-y-3 -rotate-45" : ""
						}`}
					/>
				</div>
			</div>
		</nav>
	);
};
