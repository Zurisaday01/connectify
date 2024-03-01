'use client';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { navLinks } from '@/constants';

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<aside className='hidden lg:flex flex-col items-start bg-white  w-72 py-7'>
			<div className='flex justify-center  ml-7'>
				<Link href='/'>
					<Image
						src='/assets/images/logo.png'
						alt='logo'
						width={180}
						height={20}
					/>
				</Link>
			</div>

			<nav className='mt-10 flex flex-col justify-between h-full w-full ml-7'>
				<SignedIn>
					<ul className='sidebar-nav_elements'>
						{navLinks.slice(0, 4).map(link => {
							const isActive = link.route === pathname;

							return (
								<li
									key={link.route}
									className={`text-xl p-3 group ${
										isActive
											? 'text-pink-200 bg-gray-100 rounded-lg'
											: 'text-gray-700'
									}`}>
									<Link className='flex gap-2' href={link.route}>
										<Image
											src={link.icon}
											alt='logo'
											width={24}
											height={24}
											className={`${isActive && 'fill-pink-200'}`}
										/>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ul>

					<ul>
						<li className='cursor-pointer gap-2 p-4'>
							<UserButton afterSignOutUrl='/' showName />
						</li>
						{navLinks.slice(4, 6).map(link => {
							const isActive = link.route === pathname;

							return (
								<li
									key={link.route}
									className={`text-xl p-3 group ${
										isActive
											? 'text-pink-200 bg-gray-100 rounded-lg'
											: 'text-gray-700'
									}`}>
									<Link className='flex gap-2' href={link.route}>
										<Image
											src={link.icon}
											alt='logo'
											width={24}
											height={24}
											className={`${isActive && 'fill-pink-200'}`}
										/>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</SignedIn>

				<SignedOut>
					<div className='ml-[-28px] w-full flex'>
						<Button asChild className='button w-[80%] mx-auto'>
							<Link href='/sign-in'>Login</Link>
						</Button>
					</div>
				</SignedOut>
			</nav>
		</aside>
	);
};
export default Sidebar;
