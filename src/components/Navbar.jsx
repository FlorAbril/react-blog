import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"


const Navbar = () => {
  const [,saveToken] = useLocalStorage("token")
return (
  <BootstrapNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <BootstrapNavbar.Brand as={NavLink} to="/">React-Bootstrap</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BootstrapNavbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link as={NavLink} to="/" >
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/posts/create" >
            Create Post
          </Nav.Link>
          <Nav.Link as={NavLink} to="/" onClick={()=>saveToken("")}>
            Logout
          </Nav.Link>
            
        </Nav>
      </BootstrapNavbar.Collapse>
    </Container>
  </BootstrapNavbar>
)

}


export default Navbar 