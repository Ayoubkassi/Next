import Link from 'next/link'
import styles from '../styles/Layout.module.css';


export const Post = () => {
  return(
    <div style={styles.main}>
       <Link href={`/posts/${post.id}`}>{ post.title }</Link>
       <p>{ post.body }</p>
      <p>Test</p>
    </div>
  );
}
