import { NavStyle } from "../css/NavStyle"

const Nav = () => {
    return (
        <NavStyle>
           <section>
                <nav>
                    <a href="/">Home</a>
                    <a href="/Produtos">Produtos</a>
                    <a href="/Sobre">Sobre</a>
                    <a href="/Login">Login</a>
                </nav>
            </section> 
        </NavStyle>
    )
}

export default Nav
