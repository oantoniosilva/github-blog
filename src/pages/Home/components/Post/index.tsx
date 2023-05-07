import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer to="/post/1">
      <div>
        <strong>JavaScript data types and data structures</strong>
        <span>Há 1 dia</span>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        dicta, dolor maxime mollitia omnis illo facilis saepe culpa sint fuga
        similique? Error voluptatibus, soluta dolorem voluptas odit doloribus
        reiciendis porro?
      </p>
    </PostContainer>
  )
}
