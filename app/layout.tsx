'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from './[components]/Navigation';
import AppWrapper from './AppWrapper';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AppWrapper>
			<body
				className={`${inter.className} dark:bg-board-progress bg-custom-white min-w-screen min-h-screen dark:text-white text-black relative`}
			>
				<Navigation />
				{children}
			</body>
		</AppWrapper>
	);
}
