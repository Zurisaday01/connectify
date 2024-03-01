'use client';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { navLinks } from '@/constants';

const MobileNav = () => {
	const pathname = usePathname();
	return (
		<header className='flex lg:hidden w-full px-4 bg-white py-2 justify-between items-center'>
			<Link href='/' className='flex justify-center items-center'>
				<Image
					src='/assets/images/logo.png'
					width={180}
					height={20}
					alt='logo'
				/>
			</Link>

			<nav className='flex gap-2 items-center'>
				<UserButton afterSignOutUrl='/' />

				<Sheet>
					<SheetTrigger>
						<Image
							src='/assets/icons/hamburger.svg'
							alt='hamburger'
							width={40}
							height={40}
						/>
					</SheetTrigger>
					<SheetContent>
						<div className='flex flex-col items-start'>
							<Link href='/' className='flex justify-center items-center'>
								<Image
									src='/assets/images/logo.png'
									width={180}
									height={20}
									alt='logo'
								/>
							</Link>

							<nav className='mt-8 w-full'>
								{/* sign in users */}
								<SignedIn>
									<ul className='flex flex-col w-full items-start gap-2'>
										{navLinks.map(link => {
											const isActive = link.route === pathname;

											return (
												<li
													key={link.route}
													className={`cursor-pointer text-lg p-2 transition-hover duration-300 hover:text-pink-200 ${
														isActive && 'text-pink-200'
													}`}>
													<Link href={link.route}>{link.label}</Link>
												</li>
											);
										})}
									</ul>
								</SignedIn>
								{/* sign out users */}
								<SignedOut>
									<Button asChild className='button w-full'>
										<Link href='/sign-in'>Login</Link>
									</Button>
								</SignedOut>
							</nav>
						</div>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
};
export default MobileNav;
