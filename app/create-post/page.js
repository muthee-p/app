const CreatePost = () =>{
	return(
		<div className='main'>
			<h2>Create a post</h2>
			<form className='flex flex-col'>
				<textarea className='text-gray-700 font-mono rounded-xl p-2' placeholder='tell us ...' />
				<button className='p-1 text-center bg-sky-400 w-28 rounded-full mt-6'> Post </button>
			</form>
		</div>
		)
}

export default CreatePost