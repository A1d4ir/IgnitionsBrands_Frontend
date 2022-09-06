import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina}) => {
    return (
        <>
            <Head>
                <title>IgnitionsBrands - {pagina}</title>
                <meta 
                    name="description" 
                    content="Pagina principal de IgnitionsBrands studios" 
                />
                <link rel="icon" href="/icono.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" 
                    rel="stylesheet" 
                /> 
            </Head>

                <Header />

                {children}    
            
                <Footer />
        </>
    )
}

export default Layout