import React from "react";

import { Jumbotron } from "reactstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Banner(props) {
  return (
    <Jumbotron className="jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            {props.subTitle && (
              <h2 className="display-4 font-weight-light">{props.subTitle}</h2>
            )}
            {props.text && (
              <h3 classNAme="lead font-weight-light">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
// export const Banner2 = (props) => {
//   return (
//     <div className="banner bg-1">
//       <div className="navbar">
//         <div className="logo">MOVILIST</div>
//         <div className="nav">
//           <Switch>
//             <Route exact path="/">
//               <div
//                 className="nav__icon login"
//                 onClick={() => {
//                   props.onclick();
//                 }}
//               >
//                 <Icon icon={`mdi:${props.iconName}`} color="#eaeef0" height="48" />
//               </div>
//             </Route>
//             <Route path="/user">
//               <div
//                 className="nav__icon logout"
//                 onClick={() => {
//                   props.onProfile();
//                 }}
//               >
//                 <Icon icon="mdi:logout-variant" color="#eaeef0" height="48" />
//               </div>
//             </Route>
//           </Switch>
//         </div>
//       </div>
//       <div className="banner__box">
//         <Switch>
//           <Route path="/">
//             <h2 className="banner__title">
//               Discover millions movies and TV shows
//             </h2>
//             <form
//               className="search"
//               onSubmit={() => {
//                 console.log("search movies");
//               }}
//             >
//               <input
//                 type="text"
//                 placeholder="Search movies and TV shows here"
//                 className="search__input"
//               ></input>
//               <button type="submit" className="search__btn">
//                 <Icon
//                   icon="mdi:magnify"
//                   color="rgb(168, 166, 162)"
//                   height="36"
//                 />
//               </button>
//             </form>
//           </Route>
//         </Switch>
//       </div>
//     </div>
//   );
// };

export const Banner2 = (props) => {
  return (
    <div className={`banner ${props.bgImg}`}>
      <div className="navbar">
        <div className="logo">MOVILIST</div>
        <div className="nav">
          <div
            className="nav__icon login"
            onClick={() => {
              props.onClick();
            }}
          >
            <Icon icon={`mdi:${props.iconName}`} color="#eaeef0" height="48" />
          </div>
        </div>
      </div>
      <div className="banner__box">
        <Switch>
          <Route path="/">
            <h2 className="banner__title">
              Discover millions movies and TV shows
            </h2>
            <form
              className="search"
              onSubmit={() => {
                console.log("search movies");
              }}
            >
              <input
                type="text"
                placeholder="Search movies and TV shows here"
                className="search__input"
              ></input>
              <button type="submit" className="search__btn">
                <Icon
                  icon="mdi:magnify"
                  color="rgb(168, 166, 162)"
                  height="36"
                />
              </button>
            </form>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Banner;
