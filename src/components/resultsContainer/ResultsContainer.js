import React, { Component } from "react";
import Search from "../search/Search";
import ResultList from "../results/Results";
import API from "../../utils/API";

class ResultContainer extends Component {
    state = {
      // search
      search: "",
      // results
      results: [],
      // sorted name
      sort: "DESC",
    };
  
    // component did mount calls searchEmployees
    componentDidMount() {
      this.searchEmployees("");
    }
  
    // method to searchEmployees randomly
    searchEmployees = (query) => {
      // API.search(query) goes here
      API.search(query)
        .then((res) => this.setState({ results: res.data.results }))
        .catch((err) => console.log(err));
    };
  
    // handleSubmit to call searchUsers with event
    handleFormSubmit = (event) => {
      event.preventDefault();
      this.searchEmployees(this.state.search);
    };
  }