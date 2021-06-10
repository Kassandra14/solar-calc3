import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

function Bad(props) {


  return (
<Container fluid>
    <Row>
      <Col size="md-12">
        
          <h1>
            Your Results:
          </h1>

        
      </Col>
    </Row>
    <h2>Your Solar Score is {SearchResults.results}</h2>
    <Row>
      <Col size="md-10 md-offset-1">
      </Col>
    </Row>   <h4> You could possibly benefit from instlaling your own solar power system, however you will need a larger system to meet your powere requirements.
    We recommend that you contact a solar company in your area, or check out the following solar resources: .</h4>
        <h4> a</h4>
        
        <Row></Row>
        <Row></Row>
        <ul>
          <li>

          </li>
          <li>

          </li>
          <li>

          </li>
        </ul>
        
        <button>Save my score</button>
        <Row>
          <Row>

          </Row>
        </Row>
            
        <Row>
        <Col size="md-2">
            <Link to="/">← Back to SolarCalc</Link>
          </Col>
        </Row>
    </Container>
    );
  }


export default Bad;