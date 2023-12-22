import React from 'react'
interface PostsImageProps {
  posts: Post[]|null|undefined; 
  creator: Creator|null|undefined; 
}

const PostsImage: React.FC<PostsImageProps> = ({ posts, creator }) => {

  return (
    <div>
        <div className="mb-5 ml-5 mt-5">
            <span className="font-['SF Pro Display'] mr-32">Photos</span>
            <button className="font-['SF Pro Display']">
                See all photos{' '}
            </button>
        </div>
        <div className="ml-5 mr-5 flex-row">
            {posts?.map((post) => {
                return (
                    <img
                        className="mb-2 mr-2 h-[91px] w-[95px] rounded"
                        src={post.image}
                    />
                )
            })}
        </div>
    </div>
)
}

export default PostsImage
