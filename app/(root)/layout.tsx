import ChatsList from '@/components/shared/ChatsList';
import MobileNav from '@/components/shared/MobileNav';
import Sidebar from '@/components/shared/Sidebar';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className='flex flex-col lg:flex-row min-h-screen w-full bg-gray-100'>
			<Sidebar />
			<MobileNav />
			<div className='flex-1 overflow-auto mt-4 lg:mt-0'>
				<div className='md:pl-10 w-full text-dark-400 p-16-regular min-h-screen '>
					<div className='flex gap-8 bg-white pt-8 pb-8 pr-8 min-h-screen'>
						<div className=''>{children}</div>
						<div className='flex-1 border-2 border-gray-200 rounded-lg'>
							<div className='flex justify-center items-center h-full'>
								<Image
									src='/assets/images/illustrationChat.png'
									alt='Illustration Chat'
									width={500}
									height={500}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Toaster />
		</main>
	);
};
export default Layout;
