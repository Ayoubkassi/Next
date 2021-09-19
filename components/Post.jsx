import Link from 'next/link'
import styles from '../styles/Layout.module.css';
import Image from 'next/image'


export const Post = () => {
  return(
    <div style={styles.main}>
       <Link href={`/posts/${post.id}`}>{ post.title }</Link>
       <p>{ post.body }</p>
    </div>
  );
}
