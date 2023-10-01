import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoMadian from "../../images/logo.png";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary headder">
      <Container id="navbarapp" fluid>
        <Navbar.Brand href="/">
          <img src={logoMadian} className="responsive logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "30px" }}
            navbarScroll
          >
            <Nav.Link href="/">Página inicial</Nav.Link>
            <NavDropdown title="Produtos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#"></NavDropdown.Item>
              <NavDropdown.Item href="#"></NavDropdown.Item>
              <NavDropdown.Item href="/atuaProduct">
                Buscar Clientes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Todos os Clientes</NavDropdown.Item>
              <NavDropdown.Item href="/client">
                Cadastrar Clientes
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Contato">Contatos</Nav.Link>
            <Nav.Link href="/Login">Login </Nav.Link>
            <Nav.Link href="/Cadastro">Cadastre-se </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquise seus produtos"
              className="me-2"
              aria-label="Search"
            />

            <Button variant="outline-success">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
