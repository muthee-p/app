import './globals.css'
import LeftSideBar from '@components/LeftSideBar'
import RightSideBar from '@components/RightSideBar'

export const metadata = {
  title: 'Recipes',
  description: 'Share your recipes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex justify-around'>
        <div className='md:w-[20%]'>
          <LeftSideBar />
        </div>
        <div className='md:w-[60%]'>
          {children}
        </div>
        <div className='md:w-[20%]'>
          <RightSideBar />
        </div>

        </body>
    </html>
  )
}
