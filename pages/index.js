import Layout from '../components/Layout';
import Soluciones from '../components/Soluciones';
import styles from '../styles/Index.module.css';

export default function Home() {
  return (
    <Layout
      pagina="Inicio"
    >
      <main>
        <h1 className={styles.heading}>Bienvenido a IgnitionsBrands</h1>
        <Soluciones />
      </main>
    </Layout>
  )
}
