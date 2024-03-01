'use client';

import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Input } from '../ui/input';

const Search = () => {
	return (
		<div className='relative mt-5'>
			<Image
				src='/assets/icons/search.svg'
				alt='search'
				width={24}
				height={24}
				className='absolute top-2 left-2'
			/>

			<Input
				className='focus-visible:ring-transparent border-2 px-8 py-3 text-base text-gray-500'
				placeholder='Search'
			/>
		</div>
	);
};
export default Search;
