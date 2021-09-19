import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../bg1.jpg'
import styles from '../styles/Layout.module.css';
import { useState , useEffect } from 'react';
import Link from 'next/link'
import axios from 'axios'
import { Post } from '../components/Post'

export default function Home({ articles }) {

  const [ posts , setPosts ] = useState([]);
//   const [loading , setLoading] = useState(false);
//   const getPosts = async () => {
//     try {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/posts?limit=6');
//   const data = await response.data;
//   setPosts(data);
//   setLoading(true);
// } catch (error) {
//   console.error(error);
// }
//   }
//
//   useEffect(() => {
//     getPosts();
// },[loading]);



  return (
    <div>
      <Head>
        <meta name='keywords' content='ayoubkassi ,ayoub,kassi' />
        <title>Posts</title>
      </Head>
      <div className={styles.main} style={{marginTop : '-80px'}}>
        <h1 style={{ marginBottom : '68px' }}><span style={{ color : 'rgb(45, 206, 224)' }}>Hey Hey and welocme to</span> Posts Page <span style={{ color : 'rgb(45, 206, 224)' }}>.</span></h1>
        <div style={{ display : 'flex' , flexWrap : 'wrap', alignItems : 'center' , justifyContent : 'space-between' , maxWidth : '80%' }}>
      {
          articles.length && articles.map((post) =>
          <div key={post.id} style={{   border: '1px solid #eaeaea',
            borderRadius: '10px' , maxWidth : '500px' , marginBottom : '20px'}} >
            <Link href={`/posts/${post.id}`}>
              <h3 style={{ textAlign : 'center' , color : 'rgb(45, 206, 224)' , cursor : 'pointer' }}>{ post.title }</h3>
            </Link>
            <p style={{ padding : '5px 20px' }}>{ post.body }</p>
         </div>
        )
        }
        </div>
      </div>
    </div>
  )

}



export const  getStaticProps = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const articles = await res.json();

  return{
    props : {
      articles
    }
  }
}
