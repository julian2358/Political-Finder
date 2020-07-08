import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './suggestions.js';
import './search.css';


const API_URL = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDOveHFIk2BsWevyQ4J6IO9b696e7iT59E&address='

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data.officials
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
        
      <form>
          <h1 id='header'>We help you find your local representatives:</h1>
        <input id='searchbtn'
          placeholder="Enter a Location"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search
