import Link from "next/link";

const BlogLink = () => {
	return (
		<div className=" w-fit cursor-pointer  rounded-t border-b  py-4 px-2 hover:bg-slate-100 dark:hover:bg-gray-600">
			<Link href="/kkk">
				<div className="flex items-center gap-8">
					<p className="shrink-0 text-primaryOrange">03-04-2022</p>
					<div>
						<p className="text-lg">
							How to maintain creditability using strongholdHow to
							maintain creditability using stronghold
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};
export default BlogLink;
