import Layout from "Layout";
import { ThemeProvider, useTheme } from "next-themes";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<div className=" dark:bg-neutral-800 dark:text-white">
				<Layout>
					<ToastContainer />

					<Component {...pageProps} />
				</Layout>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
