import Logo from "./Logo"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-evenly items-center mt-5">
        <Logo />

        <ul className="font-inter flex flex-row gap-10 text-md">
            <li  className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
                <Link to="/">Início</Link>
            </li>

            <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
                <Link to="/">Sobre</Link>
            </li>

            <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
                <Link to="/">Tecnologias</Link>
            </li>

            <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
                <Link to="/">Projetos</Link>
            </li>
            
            <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
                <Link to="/">Serviços</Link>
            </li>

            <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
                <Link to="/">Contato</Link>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar