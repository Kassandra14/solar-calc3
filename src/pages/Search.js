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
    city: "",
    cost: "",
    results: null,
    error: "",
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  // componentDidMount() {
  //   API.getBaseBreedsList()
  //     .then(res => this.setState({ breeds: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  handleInputChange = (event) => {
    this.setState({ city: event.target.value });

   
  };
  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleCostChange = (e) => {
    this.setState({ cost: e.target.value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    // var monthlyKwh = (this.state.search)
    API.getLatLong(this.state.city)
      // console.log(monthlyKwh);
      .then((res) => {
        lat.push(res.data[0].lat);
        long.push(res.data[0].lon);

        // console.log(JSON.parse(long));
        // console.log(JSON.parse(lat));
        if (res.data.status === "error") {
          throw new Error(res.data);
        }


        API.getIrradiance(lat, long)
          .then((res) => {
            const annualDNI = res.data.outputs.avg_dni.annual;
            console.log(res.data.outputs.avg_dni.annual);
            // var solar  = {monthlykwh % 30)}  % {res.data.outputs.avg_dni.annual x.71}
            if (res.data.status === "error") {
              throw new Error(res.data);
            }
            // systemSizeNeeded = {monthlykwh (/30)}  divided by {dni x.71}
            //  if( solar >= 3){

            //  }
            this.setState({ results: annualDNI, error: "" });
          })
          .catch((err) => this.setState({ error: err.message }));
      });
  };

  // .catch(err => this.setState({ error: err.message t}));

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

            handleSearchChange={this.handleSearchChange}
            handleCostChange={this.handleCostChange}
            city={this.state.city}
            cost={this.state.cost}
            search={this.state.search}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
