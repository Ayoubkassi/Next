import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../bg1.jpg'
import styles from '../styles/Layout.module.css';
import { useState , useEffect } from 'react';
import Link from 'next/link'
import axios from 'axios'
import { Post } from '../components/Post'

export default function Home() {

  const [ posts , setPosts ] = useState([]);
  const [loading , setLoading] = useState(false);
  const getPosts = async () => {
    try {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const data = await response.data;
  setPosts(data);
  setLoading(true);
} catch (error) {
  console.error(error);
}
  }

  useEffect(() => {
    getPosts();
},[loading]);

  return (
    <div>
      <Head>
        <meta name='keywords' content='ayoubkassi ,ayoub,kassi' />
        <title>Home</title>
      </Head>
      <div className={styles.main} style={{marginTop : '-80px'}}>
        <h1 style={{ marginBottom : '68px' }}><span style={{ color : 'rgb(45, 206, 224)' }}>Hey Hey and welocme to</span> Posts Page <span style={{ color : 'rgb(45, 206, 224)' }}>.</span></h1>
        {
          posts.length && posts.map((post) =>
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h3 style={{ textAlign : 'center' , color : 'rgb(45, 206, 224)' , cursor : 'pointer' }}>{ post.title }</h3>
            </Link>
            <p style={{ padding : '5px 20px' }}>{ post.body }</p>
         </div>
        )
        }
      </div>
    </div>
  )
}