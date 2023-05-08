
import PostsCard from "./PostCard";

function Posts({ posts, search }) {
    return (
        <div className="col-lg-9">
            <div className="row row-cols-1 row-cols-lg-2 g-lg-3 g-2">
                {posts.map(post =>
                    <PostsCard
                        key={post.id}
                        post={post}
                    />
                )}
            </div>
            {!posts.length && (
                <div className="alert alert-danger mt-4" role="alert">
                    No posts found with the search term "{search}", Please try again.
                </div>
            )}
        </div>
    );
}

export default Posts;