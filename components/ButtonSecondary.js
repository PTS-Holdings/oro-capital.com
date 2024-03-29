import Link from "next/link";

const ButtonSecondary = ({ children, onClick, isDisabled = false }) => {
	return (
		<button
			className=" group relative overflow-hidden rounded-full  border border-gray-300  transition-all     "
			onClick={onClick}
			disabled={isDisabled}
		>
			<span className="ease absolute top-0 left-0 h-0 w-0 border-t-2 border-primaryOrange-light transition-all duration-200 group-hover:w-full"></span>
			<span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-primaryOrange-light transition-all duration-200 group-hover:w-full"></span>
			<span className="ease absolute top-0 left-0 h-0 w-full bg-primaryOrange-light transition-all delay-200 duration-300 group-hover:h-full"></span>
			<span className="ease absolute bottom-0 left-0 h-0 w-full bg-primaryOrange-light transition-all delay-200 duration-300 group-hover:h-full"></span>
			<span className="absolute inset-0 h-full w-full bg-primaryOrange  opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
			<span className="ease relative flex items-center gap-3 py-4 px-7 transition-colors delay-200 duration-300 group-hover:text-white">
				{children}
			</span>
		</button>
	);
};

export default ButtonSecondary;
