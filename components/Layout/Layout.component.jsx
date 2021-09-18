import styles from '../../styles/Layout.module.css';
import { Navbar } from '../Navbar/Navbar.component';

const Layout = ({children}) => {
  return(
    <div>
      <Navbar />
      <main className={styles.main}>
        { children }
      </main>
    </div>
  );
}

export default Layout;
