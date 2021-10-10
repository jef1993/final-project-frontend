import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import ListsPage from "./pages/ListsPage";

import { Banner2 } from "./components/Banner";
import { Overlay } from "./components/Overlay";

import { toggleOverlay } from "./functions";

// class App extends react.Component {
// componentDidMount(
//   getMovies = async () => {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/movie/550?api_key=b7cb96b2c3e86cd23a777c56ffafe65c"
//     )
//     const data = await response.json()
//     console.log(data)
//   }
// )

//   componentDidMount() {
//     fetch(
//       "https://api.themoviedb.org/3/movie/now_playing?api_key=b7cb96b2c3e86cd23a777c56ffafe65c&language=en-US&page=1"
//     )
//       .then((response) => response.json())
//       .then((data) =>
//         this.setState({
//           data: data.results.map((x) => ({ ...x, selected: false })),
//         })
//       );
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],

//       Title: "Netpix",
//       headerLinks: [
//         { title: "Home", paths: "/" },
//         { title: "Sign-In", paths: "/Sign-In" },
//         { title: "My-Lists", paths: "/My-Lists" },
//       ],
//       home: {
//         title: "Netpix!",
//         subTitle: "What to watch next, made easy!",
//         text: "Create a custom list from thousands of movies and let us choose what you watch next!",
//       },
//       signIn: {
//         title: "Netpix!",
//         subTitle: "What to watch next, made easy!",
//         text: "Create a custom list from thousands of movies and let us choose what you watch next!",
//       },
//     };
//   }

//   render() {
//     return (
//       <Router>
//         <Container className="p=0" fluid={true}>
//           <Navbar className="border-bottom" bg="transparent" expand="lg">
//             <Navbar.Brand>Netpix</Navbar.Brand>

//             <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
//             <Navbar.Collapse id="navbar-toggle">
//               <Nav className="ml-auto">
//                 <Link className="nav-link" to="Home">
//                   Home
//                 </Link>
//                 <Link className="nav-link" to="/">
//                   Sign In
//                 </Link>
//                 <Link className="nav-link" to="My-Lists">
//                   My Lists
//                 </Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>

//           <Route
//             path="/Home"
//             render={() => (
//               <HomePage
//                 title={this.state.home.title}
//                 subTitle={this.state.home.subTitle}
//                 text={this.state.home.text}
//                 data={this.state.data}
//               />
//             )}
//           />
//           <Route
//             path="/"
//             exact
//             render={() => (
//               <SignInPage
//                 title={this.state.home.title}
//                 subTitle={this.state.home.subTitle}
//                 text={this.state.home.text}
//               />
//             )}
//           />
//           <Route path="/My-Lists" render={() => <ListsPage />} />
//           <Footer />
//         </Container>
//       </Router>
//     );
//   }
// }

export function App2() {
  const [curUser, setCurUser] = useState("");

  const navSwitch = () => {
    const obj = {};
    if (curUser === "") {
      obj.iconName = "login-variant";
      obj.path = "/";
    } else {
      obj.iconName = "account-box-outline";
      obj.path = `/account`;
    }
    return obj;
  };

  const userHandler = () => {
    if (curUser === "") {
      toggleOverlay();
    }
  };
  const loginHandler = () => {};

  const registerHandler = () => {};

  const logoutHandler = () => {
    setCurUser("");
  };

  return (
    <Router>
      <div className="App">
        <Overlay onSignIn={loginHandler} onRegister={registerHandler} />

        <div className="main">
          <Switch>
            <Route exact path="/">
              <Banner2
                bgImg="bg-1"
                iconName={navSwitch().iconName}
                linkTo={navSwitch().path}
                userNameTop={curUser}
                navBtn={userHandler}
              />
            </Route>
            <Route path="/account">
              <Banner2
                bgImg="bg-2"
                iconName="backspace-outline"
                userName={curUser}
                resetUser={() => {
                  logoutHandler();
                }}
                linkTo="/"
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// export default App;
