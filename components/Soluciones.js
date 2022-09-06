import Image from "next/image"
import styles from "../styles/Soluciones.module.css"

const Soluciones = () => {

    return (
        <div className="contenedor">
            <h2 className={styles.headingSoluciones}>Nuestros Servicios</h2>
            <div className={styles.contenedorCards}>
                <div className={styles.card}>
                    <Image 
                        width={350} 
                        height={300} 
                        src="/img/web_development.jpg" 
                        alt="Web development" 
                    />
                    <div className={styles.cardText}>
                        <p>
                            <span className={styles.cardTitle}>Software Enginering </span> 
                            Desarrollamos aplicaciones que facilitan las cosas, escalan y lo mejor, con las
                            mejores practicas y tecnologias.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image
                        width={350} 
                        height={300} 
                        src="/img/ecommerce.png" 
                        alt="Ecommerce" 
                    />
                    <div className={styles.cardText}>
                        <p>
                            <span className={styles.cardTitle}>Ecommerce </span>
                            Poner tu negocio en linea es ahora una necesidad y nosotros podemos ayudarte
                            a crear tu tienda en linea.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image 
                        width={350} 
                        height={300} 
                        src="/img/marketing.jpg" 
                        alt="Marketing" 
                    />
                    <div className={styles.cardText}>
                        <p>
                            <span className={styles.cardTitle}>Marketing Digital </span>
                            Creamos las estrategia comercial que se adaptan mejor a tus necesidades.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.contenedorCards}>
                <div className={styles.card}>
                    <Image 
                        width={350} 
                        height={300} 
                        src="/img/fotografia.jpg" 
                        alt="Fotografia" 
                    />
                    <div className={styles.cardText}>
                        <p>
                            <span className={styles.cardTitle}>Fotografia Profesional </span> 
                            Una imagen vale mas que mil palabras, contamos con servicio de fotografia Profesional
                            para tenerte cubierto.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image
                        width={350} 
                        height={300} 
                        src="/img/vinil_textil.webp" 
                        alt="Ecommerce" 
                    />
                    <div className={styles.cardText}>
                        <p>
                            <span className={styles.cardTitle}>Vinil Textil </span>
                            Contamos con servicio de vinil textil.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image 
                        width={350} 
                        height={300} 
                        src="/img/sublimado.jpg" 
                        alt="Marketing" 
                    />
                    <div className={styles.cardText}>
                        <p>
                            <span className={styles.cardTitle}>Sublimado </span>
                            Contamos con servicio de sublimado.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Soluciones
