import Head from 'next/head'

function Films({film}) {
  return <>

  <Head>
    <title>{film.director}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <h1>First Post {film.director}</h1>
</>
}
export async function getStaticProps({params}) {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://swapi.dev/api/films/${params.id}`)
  const film = await res.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      film,
    },
  }
}
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://swapi.dev/api/films/')
  const posts = await res.json()
  //console.log(posts);

  // Get the paths we want to pre-render based on posts
  const paths = posts.results.map((post,key) => ({
    params: { id: key.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
export default Films
