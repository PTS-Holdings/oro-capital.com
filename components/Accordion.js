import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
const Accordion = ({ title, text, opened }) => {
	const [isOpen, setIsOpen] = useState(opened || false);

	return (
		<div className="relative z-10 mb-4 overflow-hidden md:w-2/3">
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={`flex w-full cursor-pointer items-center rounded py-4 text-xl   font-semibold transition-all duration-300 ease-in-out dark:hover:bg-gray-800 ${
					isOpen && "bg-slate-200 dark:bg-gray-800"
				}`}
			>
				<span
					className={` mx-4 font-bold transition-all duration-300 ease-in-out ${
						isOpen && "rotate-90"
					}`}
				>
					<BsChevronRight />
				</span>
				<p>{title}</p>
			</div>
			<div
				className={`w-full rounded-b-lg  bg-slate-100 p-8 transition-all duration-200 ease-in-out  dark:bg-gray-600
					${!isOpen && "absolute -translate-y-96 pt-2 "}
				`}
			>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Accordion;
