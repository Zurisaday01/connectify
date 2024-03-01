import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const sourceSans = Source_Sans_3({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	variable: '--font-source',
});

export const metadata: Metadata = {
	title: 'Connectify',
	description: 'Real Chat Application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				variables: { colorPrimary: '#E26387' },
			}}>
			<html lang='en'>
				<body
					className={cn('font-IBMPlex antialiased', sourceSans.variable)}
					suppressHydrationWarning={true}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
