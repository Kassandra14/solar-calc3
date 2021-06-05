import React from "react";
import "./style.css";



function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="city"
          type="text"
          className="form-control"
          placeholder="Type in your city"
          id="city"
        />
         <input
          value={props.search}
          onChange={props.handleInputChange}
          name="monthlyKwh"
          type="number"
          className="form-control"
          placeholder="Type in your monthly energy use in Kwh (you will need a utility bill"
          id="monthlyKwh"
        />
            <input
          value={props.search}
          onChange={props.handleInputChange}
          name="monthlyCost"
          type="decimal"
          className="form-control"
          placeholder="Type in your monthly electric cost"
          id="monthlyCost"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

