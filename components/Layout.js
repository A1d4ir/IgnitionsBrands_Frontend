import Head from "next/head"
import Header from "./Header"

const Layout = ({children, pagina}) => {
    return (
        <div>
            <Head>
                <title>IgnitionsBrands - {pagina}</title>
                <meta name="description" content="Pagina principal de IgnitionsBrands studios" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            {children}    

        </div>
    )
}

export default Layout