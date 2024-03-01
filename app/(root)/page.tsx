import ChatsList from '@/components/shared/ChatsList';
import Header from '@/components/shared/Header';

import Image from 'next/image';

export default function Home() {
	return (
		<section className='px-6 w-[300px]'>
			<Header title='Chats' />
		</section>
	);
}
