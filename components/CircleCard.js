const CircleCard = ({ title, subtitle, text }) => {
	return (
		<div
			className={`flex flex-col content-center items-center justify-center rounded-full border border-gray-800/40 p-10  text-center ${
				title || subtitle
					? "h-[18rem] w-[18rem]"
					: "h-[14rem] w-[14rem]"
			}`}
		>
			{/* Hide title & sub title if its not passed in the props */}
			<div className="mb-6">
				{title && (
					<p className="text-xl font-bold capitalize text-primaryOrange">
						{title}
					</p>
				)}
				{subtitle && <p className="font-semibold">{subtitle}</p>}
			</div>
			<p>{text}</p>
		</div>
	);
};

export default CircleCard;
