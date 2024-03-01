import Search from '@/components/shared/Search';
const Header = ({ title }: { title: string }) => {
	return (
		<header>
			<h2 className='text-2xl font-bold'>{title}</h2>
			<Search />
		</header>
	);
};
export default Header;
