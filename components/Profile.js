import Image from 'next/image'
import Link from 'next/link';

const Profile = () =>{
	return(
		<div className= 'flex-between flex-col'>
			<Link href='/profile'>
				<Image src='/assets/images/profile.png' alt='profile pic' 
					className='rounded-full'
					width={100}
          			height={100} />
			</Link>
			<h4>Mary Jane</h4>
			<p className= 'font-mono'>Doctor</p>
			<Link href='/profile' className='rounded-full bg-white text-black p-2'>View Profile</Link>
		</div>
		)
}

export default Profile