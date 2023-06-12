import Image from 'next/image'
import Link from 'next/link';

const NavLinks = () =>{
	return(
		<div className='flex flex-col pl-12'>
			<Link href='/' className='inline-flex mt-2'>
				<Image
         	 		className="mr-2 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          			src="/assets/icons/home.svg"
         			 alt="Home Icon"
          			width={25}
          			height={25}
          			priority
        		/>
        		Home
        	</Link>
        	<Link href='/create-post' className='inline-flex mt-3'>
				<Image
         	 		className="mr-2 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          			src="/assets/icons/plus.svg"
         			 alt="plus Icon"
          			width={25}
          			height={25}
          			priority
        		/>
        		Create a post
        	</Link>
		</div>
		)
}

export default NavLinks