import Link from "next/link";

const ButtonPrimary = ({ children, onClick }) => {
	return (
		<button
			className=" flex w-fit items-center gap-3  rounded-full bg-primaryOrange py-4 px-7 font-semibold hover:bg-primaryOrange-light"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default ButtonPrimary;
