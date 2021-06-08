import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

function Good(props) {
  // const [book, setBook] = useState({})

  // // When this component mounts, grab the book with the _id of props.match.params.id
  // // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // const {id} = useParams()
  // useEffect(() => {
  //   API.getBook(id)
  //     .then(res => setBook(res.data))
  //     .catch(err => console.log(err));
  // }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Your Results:
              </h1>
              <SearchResults results={this.state.results} />
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to SolarCalc</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Good;