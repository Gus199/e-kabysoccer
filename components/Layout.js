import Head from "next/head"
import styles from '../styles/Layout.module.css'
import Footer from "./Footer"
import Header from "./Header"

function Layout({title, keywords, description, children}) {
  return (
    <div>
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
    </Head>
    <Header />
    <div className={styles.container}>
       {children} 
    </div>
    <Footer />
    </div>
  )
}

export default Layout

Layout.defaultProps = {
    title: 'Kabyle Soccer Events | Find the best game',
    description: 'Find the latest soccer game Events',
    keywords: 'soccer, game events, kabyle'

}