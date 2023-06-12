import Profile from './Profile'
import NavLinks from './NavLinks'
import Link from 'next/link';


const LeftSideBar = () =>{
	return(
		<div className='hidden md:block text-center border-r border-white md:h-full pl-2 pt-8 '>
			<Link href='/' className='text-2xl text-sky-400 font-mono'>Lo.go</Link>

			<div className='mt-8'><Profile /></div>
			<div className='mt-8'><NavLinks/></div>
		</div>
		)
}

export default LeftSideBar