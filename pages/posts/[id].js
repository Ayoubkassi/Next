import { useRouter } from 'next/router'
import { useEffect , useState } from 'react'
import Head from 'next/head'


const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const [ post , setPost ] = useState(null);


  useEffect(() => {
    try{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => response.json())
  .then(data => setPost(data));
} catch(err){
  console.log(err);
}
},[post]);

  return (
    post &&
    <>
    <Head>
      <meta name='keywords' content='ayoubkassi ,ayoub,kassi' />
      <title>Post</title>
    </Head>
      <p>Post: { id }</p>
      <h3>{ post.title }</h3>
      <p style={{ lineHeight : '1.6' , fontSize : '18px' , padding : '0 15px' }}> { post.body } </p>
    </>

  )

}

export default Post;
