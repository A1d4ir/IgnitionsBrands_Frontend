import Link from "next/link"

const Header = () => {

    return (
        <header>
            <div className="contenedor">
                <div>

                </div>

                <nav>
                    <Link href="/">Inicio</Link>
                    <Link href="/servicios">Servicios</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>            
                </nav>
            </div>
        </header>
    )
}

export default Header
