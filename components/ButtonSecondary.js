import Link from "next/link";

const ButtonSecondary = ({ children, onclick, isDisabled = false }) => {
	return (
		<button
			className=" group relative overflow-hidden rounded-full  border border-gray-300  transition-all     "
			onclick={onclick}
			disabled={isDisabled}
		>
			<span class="ease absolute top-0 left-0 h-0 w-0 border-t-2 border-primaryOrange-light transition-all duration-200 group-hover:w-full"></span>
			<span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-primaryOrange-light transition-all duration-200 group-hover:w-full"></span>
			<span class="ease absolute top-0 left-0 h-0 w-full bg-primaryOrange-light transition-all delay-200 duration-300 group-hover:h-full"></span>
			<span class="ease absolute bottom-0 left-0 h-0 w-full bg-primaryOrange-light transition-all delay-200 duration-300 group-hover:h-full"></span>
			<span class="absolute inset-0 h-full w-full bg-primaryOrange  opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
			<span class="ease relative flex items-center gap-3 py-4 px-7 transition-colors delay-200 duration-300 group-hover:text-white">
				{children}
			</span>
		</button>
	);
};

export default ButtonSecondary;
