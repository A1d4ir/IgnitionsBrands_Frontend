import Layout from '../components/Layout'
import Soluciones from '../components/Soluciones'
import styles from '../styles/Servicios.module.css'

const Servicios = () => {
    return (
        <Layout
            pagina="Nuestros Servicios"
        >
            <h1 className={styles.mainHeading}>Desde Ingenieria de software hasta servicios de sublimado</h1>
            <p className={styles.texto}>
                Contamos con una amplia gama de servicios y un equipo creativo que llevara tus ideas a la realidad.
                Puedes ponerte en contacto con nosotros en: <a href='mailto:contacto@ignitionsbrands.com'>
                contacto@ignitionsbrands.com</a> para solicitar información o preguntar cualquier duda.
            </p>
            <Soluciones />
        </Layout>
    )
}

export default Servicios
