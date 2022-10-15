import BlogLink from "components/BlogPage/BlogLink";
import ButtonSecondary from "components/ButtonSecondary";
import Link from "next/link";

const BlogRoom = () => {
	return (
		<section className="container">
			<h2 className="mb-4 text-3xl font-bold">
				<span className=" text-primaryOrange">Blog</span> Room
			</h2>
			<div className="lg:w-2/3">
				<BlogLink />
				<BlogLink />
				<BlogLink />
				<BlogLink />
			</div>
			<Link href="/blog" passHref>
				<div className="mx-auto mt-8">
					<ButtonSecondary>Read more</ButtonSecondary>
				</div>
			</Link>
		</section>
	);
};
export default BlogRoom;
