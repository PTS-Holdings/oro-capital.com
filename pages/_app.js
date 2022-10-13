import Layout from "Layout";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<div className=" dark:bg-neutral-800 dark:text-white">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
