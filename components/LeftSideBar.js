import Profile from './Profile'
import NavLinks from './NavLinks'
import Link from 'next/link';


const LeftSideBar = () =>{
	return(
		<div className='hidden md:block border-r border-white md:h-full p-4 '>
			<Link href='/' className='text-xl'>Logo</Link>

			<div className='mt-8'><Profile /></div>
			<div className='mt-8'><NavLinks/></div>
		</div>
		)
}

export default LeftSideBar