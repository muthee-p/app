import SuggestedPosts from './SuggestedPosts'

const RightSideBar = () =>{
	return(
		<div className='hidden md:block border-l border-white md:h-full'>
			<SuggestedPosts />
		</div>
		)
}

export default RightSideBar