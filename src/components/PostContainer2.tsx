import { FC } from "react"
import { postApi } from "../services/PostService"
import PostItem from "./PostItem"


const PostContainer2: FC = () => {

	const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(10)

	return (
		<div>
			<div className="post__list">
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>Error</h1>}
				{/* {posts && posts.map(post => <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />)} */}
			</div>
		</div>
	)
}
export default PostContainer2