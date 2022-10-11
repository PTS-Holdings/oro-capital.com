import Image from "next/image";
import oroCapitalBlackLogo from "public/assets/capitalLogo-black.svg";
import { NavLinks } from "./navLinks";
import { useState, useEffect } from "react";
// import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();
	const ThemeChanger = () => {
		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<button
					className="bg-gray-200 dark:bg-gray-600"
					onClick={() => setTheme("light")}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			);
		} else {
			return (
				<button className="" onClick={() => setTheme("dark")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				</button>
			);
		}
		// return (

		// 	<button>
		// 		<BsFillMoonFill />
		// 	</button>
		// );
	};
	return (
		<nav className=" py-5 dark:bg-neutral-800 ">
			<div className="container flex content-center justify-between ">
				<div className="my-auto">
					<Image
						alt="Oro Capital Logo"
						src={oroCapitalBlackLogo}
						height={50}
						width={90}
					/>
				</div>
				{/* Navigation Links */}
				<ul
					className={`absolute z-10  flex w-screen flex-col gap-6
					 overflow-hidden bg-white transition-all duration-300 ease-in-out
					 md:static md:w-auto md:flex-row md:content-center md:items-center ${
							open ? "h-[90vh]} top-24" : "-top-96"
						}`}
				>
					{NavLinks.map((navLink) => (
						<li key={navLink.link} className="text-center">
							<a href={navLink.link}>{navLink.displayName}</a>
						</li>
					))}
					<li>{ThemeChanger()}</li>
				</ul>

				{/* hamburger button */}
				<div
					className="relative z-50 my-auto flex h-7 w-7 flex-col items-center justify-between  md:hidden "
					onClick={() => {
						setOpen(!open);
					}}
				>
					<span
						className={`h-1 w-full transform rounded-full  bg-gray-700 transition duration-300 ease-in-out ${
							open ? "translate-y-3 rotate-45" : ""
						}`}
					/>
					<span
						className={`h-1 w-full rounded-full  bg-gray-700 transition-all duration-300 ease-in-out ${
							open ? "w-0" : "w-full"
						}`}
					/>
					<span
						className={`h-1 w-full transform rounded-full  bg-gray-700 transition duration-300 ease-in-out ${
							open ? "-translate-y-3 -rotate-45" : ""
						}`}
					/>
				</div>
			</div>
		</nav>
	);
};
