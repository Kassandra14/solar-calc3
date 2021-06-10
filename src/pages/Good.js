import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
//import ResultsContainer from "../components/ResultsContainer";

function Good(props) {


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
        </Row>        <h4> This is a great solar score! you could potentially save money by investigating installing a solar system at your property.</h4>
        <h4> Check out the following solar resources:</h4>
        <Row>
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
          <Col size="md-2">
            <Link to="/">← Back to SolarCalc</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Good;