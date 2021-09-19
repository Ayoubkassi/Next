import { useRouter } from 'next/router'
import { useEffect , useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../bg1.jpg'


const Post = ({ post }) => {
  const router = useRouter()
  const { id } = router.query
//   const [ post , setPost ] = useState(null);
//
//
//   useEffect(() => {
//     try{
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   .then(response => response.json())
//   .then(data => setPost(data));
// } catch(err){
//   console.log(err);
// }
// },[post]);

  return (
    post &&
    <>
    <Head>
      <meta name='keywords' content='ayoubkassi ,ayoub,kassi' />
      <title>Post</title>
    </Head>
      <p>Post: { id }</p>
      <h3 style={{ color : 'rgb(45, 206, 224)' }}>{ post.title }</h3>
      <p style={{ lineHeight : '1.6' , fontSize : '18px' , padding : '0 15px' , maxWidth : '400px' }}> { post.body } </p>
      <img src={`https://picsum.photos/200`} />
    </>

  )

}

export const  getServerSideProps = async (context) => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const post = await res.json();

  return{
    props : {
      post
    }
  }
}

export default Post;
