import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href="/">
                        <a>
                            <Image 
                                width={240} 
                                height={100} 
                                src="/img/logo.png" 
                                alt="Imagen logo"
                            />
                        </a>
                    </Link>

                    <nav className={styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/servicios">Servicios</Link>
                        <Link href="/nosotros">Nosotros</Link>         
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
