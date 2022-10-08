import Link from "next/link";

const ButtonPrimary = ({ children, onclick }) => {
	return (
		<button
			className=" flex w-fit items-center gap-3  rounded-full bg-primaryOrange py-4 px-7 font-semibold hover:bg-primaryOrange-light"
			onclick={onclick}
		>
			{children}
		</button>
	);
};

export default ButtonPrimary;
