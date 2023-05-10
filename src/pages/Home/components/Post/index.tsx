import { IPost } from '../..'
import { relativeDateFormatter } from '../../../../utils/dateFormatter'
import { PostContainer } from './styles'

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const dateFormatted = relativeDateFormatter(post.created_at)

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{dateFormatted}</span>
      </div>

      <p>{post.body}</p>
    </PostContainer>
  )
}
