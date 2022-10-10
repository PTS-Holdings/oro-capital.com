const CircleCard = ({ title, subtitle, text }) => {
	return (
		<div className=" flex h-[18rem] w-[18rem] flex-col content-center items-center justify-center rounded-full border border-gray-800/40 p-10  text-center">
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
