import React from "react";

import { Jumbotron } from "reactstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { MovieSearch } from "./MovieSearch";
import { UserMenu } from "./UserMenu";
import { useHistory } from "react-router-dom";

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

export const Banner2 = (props) => {
  return (
    <div className={`banner ${props.bgImg}`}>
      <div className="navbar">
        <div className="logo">MOVILIST</div>
        <div className="nav">
          <h3 className="nav__user">{props.userNameTop}</h3>
          <Link className="nav__link" to={props.linkTo} onClick={props.navBtn}>
            <Icon
              className="nav__icon"
              icon={`mdi:${props.iconName}`}
              color="#eaeef0"
              height="48"
            />
          </Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <MovieSearch />
        </Route>
        <Route path="/account">
          <UserMenu userName={props.userName} resetUser={props.resetUser} />
        </Route>
      </Switch>
    </div>
  );
};

export default Banner;
