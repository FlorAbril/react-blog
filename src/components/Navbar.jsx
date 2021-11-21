import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"


const Navbar = () => {
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
          <Nav.Link as={NavLink} to="/post/create" >
            Create Post
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </Container>
  </BootstrapNavbar>
)

}


export default Navbar 