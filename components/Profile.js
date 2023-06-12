import Image from 'next/image'
import Link from 'next/link';

const Profile = () =>{
	return(
		<div className= 'flex-between flex-col'>
			<Link href='/profile'>
				<Image src='/assets/images/profile.png' alt='profile pic' 
					className='rounded-full mb-8'
					width={100}
          			height={100} />
			</Link>
			<h4 className=''>Mary Jane</h4>
			<p className= 'font-mono text-sm text-sky-400'>Doctor</p>
			<Link href='/profile' className='rounded-full bg-white text-gray-700 p-1 w-32 text-center mt-2 hover:bg-sky-400'>
			View Profile</Link>
		</div>
		)
}

export default Profile