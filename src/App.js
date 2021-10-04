import react from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import "./App.css";
import Footer from "./components/Footer"

class App extends react.Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: "Netpix",
      headerLinks: [
        {Title: "home", paths: "/"},
        {Title: "Sign In", paths: "/Sign-In"},
        {Title: "My Lists", paths: "/My-Lists"}
      ],
      home: {
        Title: ""
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Netpix</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="Sign-In">Sign In</Link>
                <Link className="nav-link" to="My-Lists">My Lists</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer/>
          
        </Container>
      </Router>
    )
  }
}

// function App() {
//   return <div className="App">App</div>;
// }

export default App;
