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
} from "@mantine/core";
import { themeOverride } from "../theme";
import Link from "next/link";

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
				<div>
					{/*<Image
						src="/image/ng.png"
						alt="background"
						fill
						style={{ zIndex: -1 }}
          			/>*/}
					<Head>
						<title>{title}</title>
						<meta charSet="utf-8" />
						<meta
							name="viewport"
							content="initial-scale=1.0, width=device-width"
						/>
					</Head>
					{
					<header>
						
						<NavLink label='test' onClick={() => toggleColorScheme()}></NavLink>
						<NavLink label='go to about'  component={Link} href={'/about'} />
						<NavLink label='go to home' component={Link} href={"/"} />
					</header>
					/* <header>
					
          <nav>
            <Link href='/'>Home</Link> | <Link href='/about'>About</Link> |{' '}
            <Link href='/users'>Users List</Link> |{' '}
            <a href='/api/users'>Users API</a>
          </nav>
        </header> */}
					{children}
					{/* <footer>
          <hr />
          <span>I'm here to stay (Footer)</span>
        </footer> */}
				</div>
			</MantineProvider>
		</ColorSchemeProvider>
	);
};

export default Layout;
