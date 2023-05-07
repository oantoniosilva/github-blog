import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { PostsListContainer } from './styles'

export function Home() {
  return (
    <>
      <Profile />
      <Search />
      <PostsListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsListContainer>
    </>
  )
}
