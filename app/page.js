import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className='main'>
    <div>
      <input type='text' className='rounded-full p-1 pl-4' placeholder='search' />
    </div>
    <div className='border-b border-gray'>
      <div className='flex items-center'>
        <Link href='/profile'>
          <Image src='/assets/images/profile.png' alt='profile pic' 
            className='rounded-full mr-2'
            width={35}
                height={35} />
        </Link>
        <div>
          <h4>Mary Jane</h4>
          <p className= 'font-mono'>Doctor</p>
      </div>
      </div>
      <div className='mt-8'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div>
        <Link href='/' className='inline-flex mt-2'>
        <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/assets/icons/like.svg"
               alt="heart Icon"
                width={25}
                height={25}
                priority
            />
          </Link>
      </div>
      </div>
    </main>
  )
}
