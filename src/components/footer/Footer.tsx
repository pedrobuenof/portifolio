import List from "../Header/List";
import './footer.css'


export default function Footer(){
  return (
    <footer>
      <List customClassName="nav-footer" items={["Projetos", "Sobre", "Certificações"]}/>
      <List customClassName="contact" items={["devbueno3@gmail.com", "+55 84 99496-9191"]}/>
      <p className="copyright">© 2024 Pedro Bueno Ferreira. Todos os direitos reservados.</p>
    </footer>
  )
}