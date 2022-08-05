import Image from "next/image"
import styles from "../styles/Soluciones.module.css"

const Soluciones = () => {

    return (
        <div className="contenedor">
            <h2 className={styles.headingSoluciones}>Nuestras soluciones</h2>
            <p className={styles.subtitleSoluciones}>
                Desarrollo web, Ecommerce y Marketing digital
            </p>
            <div className={styles.contenedorCards}>
                <div>
                    <Image 
                        width={400} 
                        height={400} 
                        src="/img/web_development.jpg" 
                        alt="Web development" 
                    />
                </div>
                <div>
                    <Image
                        width={400} 
                        height={400} 
                        src="/img/ecommerce.png" 
                        alt="Ecommerce" 
                    />
                </div>
                <div>
                    <Image 
                        width={400} 
                        height={400} 
                        src="/img/marketing.jpg" 
                        alt="Marketing" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Soluciones
