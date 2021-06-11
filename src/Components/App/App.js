import React from 'react';
import './App.css';
import Form from '../Form/Form';
import SearchResults from '../SearchResults/SearchResults';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: null,
      playerStats: {},
      playerFullName: null,
      secondPlayer: null, 
      secondFullName: null,
      secondPlayerStats: {},
      season: null
    }
  }

  getPlayerId = () => {
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
    .then(async res => {
      console.log(res.data.data)
      if(res.data.data[0] === undefined) {
        alert("This player is either injured or hasn't played yet")
      } else {
      await this.getPlayerStats(res.data.data[0].id)
      this.setState( {playerFullName: res.data.data[0].first_name + " " + (res.data.data[0].last_name)})
      }
    }).catch(err => {
      console.log(err);
    })
  }

  getPlayerStats = (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=${this.state.season}&player_ids[]=${playerId}`)
    .then(async res => {
      console.log(res.data.data)
      this.setState({ playerStats: res.data.data[0]})
    }).catch(err => {
      console.log(err)
    })
  }

  handleChange = (event) => {
    const replace = event.target.value.split(" ").join("_"); 
    if(replace.length > 0) {
        this.setState({playerName: replace})
     }
}

  handleChangeTwo = (event) => {
    const replace = event.target.value.split(" ").join("_"); 
    if(replace.length > 0) {
        this.setState({secondPlayer: replace})
    }
  }

  handleSeasonChange = (event) => {
    const season = event.target.value;
    this.setState({season: season})
  }
  

  handleSubmit = (e) => {
    e.preventDefault();
    this.getPlayerId();
    this.getPlayerIdTwo();
}

  getPlayerIdTwo = () => {
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.secondPlayer}`)
    .then(async res => {
      console.log(res.data.data)
      if(res.data.data[0] === undefined) {
        alert("This player is either injured or hasn't played yet")
      } else if (res.data.data.length > 1){
        alert("Please specify the name")
      } else {
      await this.getPlayerStatsTwo(res.data.data[0].id)
      this.setState( {secondFullName: res.data.data[0].first_name + " " + (res.data.data[0].last_name)})
      }
    }).catch(err => {
      console.log(err);
    })
  }

  getPlayerStatsTwo = (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=${this.state.season}&player_ids[]=${playerId}`)
    .then(async res => {
      console.log(res.data.data)
      this.setState({ secondPlayerStats: res.data.data[0]})
    }).catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getPlayerStats()
    this.getPlayerStatsTwo()
  }


  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center">NBA Stats Analyzer</h1>
        <Form userChange={this.handleChange} 
              userChangeTwo={this.handleChangeTwo} 
              userSubmit={this.handleSubmit} 
              seasonChange={this.handleSeasonChange} />
        <br/>
        <SearchResults stats={this.state.playerStats} 
                        name={this.state.playerFullName} 
                        secondPlayer={this.state.secondFullName} 
                        secondPlayerStats={this.state.secondPlayerStats} />
      </div>
        
    )
  }
}

export default App;
