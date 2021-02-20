import React, { Component } from 'react';
import logo from './assets/corona.png';
import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  irelandPopulation = 5000000;
  totalVaccinations = this.state.response;
  percentageOfPopulation = parseInt(this.totalVaccinations) / this.irelandPopulation;

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.total_vaccinations }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/covid');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch('/api/covid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p><strong>Total Vaccinations:</strong> {this.totalVaccinations.toLocaleString()}</p>
          <p><strong>Percentage of Population Vaccinated:</strong> {`${this.percentageOfPopulation}%`}</p>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>        <p><strong>Total Vaccinations:</strong> {this.state.response.toLocaleString()}</p>

          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>post response{this.state.responseToPost}</p> */}
        </header>
      </div>
    );
  }
}

export default App;
