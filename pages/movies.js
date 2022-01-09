function Movies({posts}) {
  return (
    <>
      <h1>Movies</h1>
      <table>
        <tbody>
          <th>titulo</th>
          <td>{posts.title}</td>
        </tbody>
      </table>
    </>
  )
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://swapi.dev/api/films/1/')
  const posts = await res.json()
  console.log(posts);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
export default Movies
