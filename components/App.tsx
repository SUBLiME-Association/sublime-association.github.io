import React, { useState } from "react";
//import Link from 'next/link'
import Head from "next/head";
//import Image from "next/image";
import { LayoutProps } from "../typings";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
	NavLink,
	Box,
} from "@mantine/core";
import { themeOverride } from "../theme";
import Link from "next/link";
import CustomFonts from '../theme/font';

const Layout: React.FC<LayoutProps> = ({ children, title = "SUBLiME" }) => {
	const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme, ...themeOverride }}
				withGlobalStyles
				withNormalizeCSS
			>
        <CustomFonts />
				<div>
					<Head>
						<title>{title}</title>
						<meta charSet="utf-8" />
						<meta
							name="viewport"
							content="initial-scale=1.0, width=device-width"
						/>
            <link rel="icon" href="/favicon.ico" />
					</Head>
					<header>
						<Box w={240} display="flex">
							<NavLink
								variant="subtle"
								active
								noWrap
								label="theme"
								onClick={() => toggleColorScheme()}
							></NavLink>
							<NavLink
								variant="subtle"
								active
								noWrap
								label="go to about"
								component={Link}
								href={"/about"}
							/>
							<NavLink
								variant="subtle"
								active
								noWrap
								label="go to home"
								component={Link}
								href={"/"}
							/>
							<NavLink variant="subtle" active noWrap label="teste">
								<Box w={240} display="flex">
									<NavLink
										variant="subtle"
										active
										noWrap
										label="theme"
										onClick={() => toggleColorScheme()}
									></NavLink>
									<NavLink
										variant="subtle"
										active
										noWrap
										label="go to about"
										component={Link}
										href={"/about"}
									/>
									<NavLink
										variant="subtle"
										active
										noWrap
										label="go to home"
										component={Link}
										href={"/"}
									/>
								</Box>
							</NavLink>
						</Box>
					</header>
					{children}
					<footer>
						<span>github (footer)</span>
					</footer>
				</div>
			</MantineProvider>
		</ColorSchemeProvider>
	);
};

export default Layout;
