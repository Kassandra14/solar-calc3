import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";


var lat = [];
var long = [];

class Search extends Component {
  state = {
    search: "",
    // breeds: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  // componentDidMount() {
  //   API.getBaseBreedsList()
  //     .then(res => this.setState({ breeds: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getLatLong(this.state.search)
.then(res => {
      
       lat.push(res.data[0].lat)
       long.push(res.data[0].lon)
    
// console.log(JSON.parse(long));
// console.log(JSON.parse(lat));
        if (res.data.status === "error") {
          throw new Error(res.data);
        }
        API.getIrradiance(lat, long)
        .then(res => {
          console.log(res.data.outputs);
          if (res.data.status === "error") {
            throw new Error(res.data);
          }
          this.setState({ results: res.data, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
      });
      
      };
      // .catch(err => this.setState({ error: err.message }));

//   API.getIrradiance(lat, long)
//   .then(res => {
//     if (res.data.status === "error") {
//       throw new Error(res.data);
//     }
//     this.setState({ results: res.data, error: "" });
//   })
//   .catch(err => this.setState({ error: err.message }));
// };

  render() {
    return (
      
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Enter your information:</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            // breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
