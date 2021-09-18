import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../bg1.jpg'
import styles from '../styles/Layout.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <meta name='keywords' content='ayoubkassi ,ayoub,kassi' />
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <h1><span style={{ color : 'rgb(45, 206, 224)' }}>Hey Hey and welocme to</span> EIC <span style={{ color : 'rgb(45, 206, 224)' }}>.</span></h1>
        <p style={{lineHeight : '1.7' , fontSize : '18px' , margin : '30px 0'}}>Le Software Engineering se définit comme un sous-domaine du vaste monde de l’informatique. Tout est dit dans le nom : Au cœur du travail du Software Engineer on retrouve le développement de logiciels et de nouveaux systèmes d’informations. Les tâches à réaliser englobent des aspects logiques et mathématiques mais également des aspects ayant trait à l’ingénierie et à la gestion. Tu auras donc besoin de connaissances dans ces différents domaines pour entamer un parcours de Software Engineer. Soulignons également que, en exerçant ce travail, il est probable que tu sois employé dans une entreprise visant à développer des solutions logicielles au bénéfice de clients externes.</p>
        <Image src={profilePic} alt="Picture of the author" />
      </div>
    </div>
  )
}
