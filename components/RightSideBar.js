import SuggestedPosts from './SuggestedPosts'

const RightSideBar = () =>{
	return(
		<div className='hidden md:block border-l border-white md:h-full pt-8 pl-12'>
			<SuggestedPosts />
		</div>
		)
}

export default RightSideBar