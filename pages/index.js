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
        <p className={styles.texto}>
          Somos una agencia creativa que busca solucionar los problemas que tu empresa
          ya sea pequeña, mediana o grande necesite resolver.
        </p>
        <Soluciones />
      </main>
    </Layout>
  )
}
