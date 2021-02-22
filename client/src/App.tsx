import React, { Component } from 'react';
import logo from './assets/corona.png';
import './App.css';
import { CountryData } from './types'

const findPercentageOfPopulation = (vaccinations: number) => {
  return (vaccinations / 5000000 * 100).toFixed(2); // Irish population is around five million
}

class App extends Component {
  state = {
    response: [],
    get: '',
    responseToGet: '',
    totalVaccinations: 0,
    percentageOfPopulation: 0,
  };

  callApi = async (): Promise<CountryData> => {
    const response: Response = await fetch('/api/ireland-data');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  componentDidMount(): void {
    this.callApi()
      .then((res: CountryData) => {
        this.setState({ response: res })
        this.setState({ totalVaccinations: res.people_vaccinated });
        this.setState({ percentageOfPopulation: findPercentageOfPopulation(this.state.totalVaccinations) });
      })
      .catch((err: Error) => console.log(err));
  }

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const response = await fetch(`/api/country-data/${this.state.get}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await response.json();

    this.setState({ responseToGet: body.error });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header">
        <p><strong>Total Vaccinations:</strong> {this.state.totalVaccinations.toLocaleString()}</p>
        <p><strong>Percentage Vaccinated:</strong> {`${this.state.percentageOfPopulation}%`}</p>
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Choose a Country:</strong>
          </p>
          <input
            type="text"
            value={this.state.get}
            onChange={e => this.setState({ get: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToGet}</p>
        </header>
      </div>
    );
  }
}

export default App;
