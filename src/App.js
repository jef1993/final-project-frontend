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
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import ListsPage from "./pages/ListsPage"

class App extends react.Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: "Netpix",
      headerLinks: [
        {title: "Home", paths: "/"},
        {title: "Sign-In", paths: "/Sign-In"},
        {title: "My-Lists", paths: "/My-Lists"}
      ],
      home: {
        title: "Netpix!",
        subTitle: "What to watch next, made easy!",
        text: "Create a custom list from thousands of movies and let us choose what you watch next!"
      },
      signIn: {
        title: "Netpix!",
        subTitle: "What to watch next, made easy!",
        text: "Create a custom list from thousands of movies and let us choose what you watch next!"
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
                <Link className="nav-link" to="Home">Home</Link>
                <Link className="nav-link" to="/">Sign In</Link>
                <Link className="nav-link" to="My-Lists">My Lists</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/Home" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/" render={() => <SignInPage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/My-Lists" render={() => <ListsPage/>} />
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
