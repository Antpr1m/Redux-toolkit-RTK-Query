import { FC, useEffect, useState } from "react"
import { IPost } from "../models/IPost"
import { postApi } from "../services/PostService"
import PostItem from "./PostItem"


const PostContainer: FC = () => {
	const [limit, setLimit] = useState(10)
	const { data: posts, error, isLoading, refetch } = postApi.useFetchAllPostsQuery(limit, {  			//Хук созданный RTK Query по названию endpoint
		// pollingInterval: 1000	
	})
	const [createPost, { }] = postApi.useCreatePostMutation()														//Хук созданный RTK Query по названию endpoint
	const [updatePost, { }] = postApi.useCreatePostMutation()
	const [deletePost, { }] = postApi.useDeletePostMutation()

	useEffect(() => {
		// setTimeout(() => {
		// 	setLimit(5)
		// }, 2000)
	}, [])

	const handleCreate = async () => {
		const title = prompt()
		await createPost({ title, body: title } as IPost)
	}

	const handleRemove = (post: IPost) => {
		deletePost(post)
	}

	const handleUpdate = (post: IPost) => {
		updatePost(post)
	}

	return (
		<div>
			<div className="post__list">
				<button onClick={handleCreate}>Add new post</button>
				{/* <button onClick={() => refetch()}>REFETCH</button> */}
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>Error</h1>}
				{posts && posts.map(post => <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />)}
			</div>
		</div>
	)
}
export default PostContainer