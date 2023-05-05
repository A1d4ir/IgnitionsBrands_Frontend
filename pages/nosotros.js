import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            pagina="Nosotros"
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>

                    <Image 
                        layout="responsive" 
                        width={600} 
                        height={450} 
                        src="/img/nosotros.jpg" 
                        alt="Imagen sobre nosotros" 
                    />

                    <div>
                        <p>
                            IgnitionsBrands es un proyecto que nació con la intención de crear, 
                            innovar y revolucionar, de la mano de las últimas tecnologías y las 
                            tendencias globales, con el fin de ofrecer a una diversa cantidad de 
                            clientes un conjunto de soluciones en el área del marketing digital, 
                            la creación de contenido digital, el desarrollo y páginas web sencillas 
                            o estáticas hasta complejas aplicaciones web utilizando las mejores 
                            tecnologías y siguiendo las mejores prácticas posibles.. 
                        </p>
                        <p>
                            En IgnitionsBrands disfrutamos lo que hacemos, ya que nos apasiona hacerlo, 
                            por lo tanto, puedes confiar en que tu proyecto estará en buenas manos..
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros
