import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CustomCursorManager from './_components/_cursor/context/manager';
import CustomCursor from './_components/_cursor/index';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ASH',
	description: 'Ashkan Rahnavardis personal website',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<title>ASH</title>
			</head>
			<body className={inter.className}>
				<CustomCursorManager>{children}</CustomCursorManager>
			</body>
		</html>
	);
}
