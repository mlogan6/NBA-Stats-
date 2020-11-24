import React from 'react';
import './SearchResults.css';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="container border border-light rounded searchResults">
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">Player: {this.props.name}</li>
                            <li className="list-group-item">Points: {this.props.stats.pts} </li>
                            <li className="list-group-item">Assists: {this.props.stats.ast} </li>
                            <li className="list-group-item">Rebounds: {this.props.stats.reb} </li>
                            <li className="list-group-item">FG% : {this.props.stats.fg_pct} </li>
                            <li className="list-group-item">3point % : {this.props.stats.fg3_pct} </li>
                            <li className="list-group-item">Steals : {this.props.stats.stl} </li>
                            <li className="list-group-item">Blocks : {this.props.stats.blk} </li>

                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">Player: {this.props.secondPlayer} </li>
                            <li className="list-group-item">Points: {this.props.secondPlayerStats.pts} </li>
                            <li className="list-group-item">Assists: {this.props.secondPlayerStats.ast} </li>
                            <li className="list-group-item">Rebounds: {this.props.secondPlayerStats.reb} </li>
                            <li className="list-group-item">FG% : {this.props.secondPlayerStats.fg_pct} </li>
                            <li className="list-group-item">3point % : {this.props.secondPlayerStats.fg3_pct} </li>
                            <li className="list-group-item">Steals : {this.props.secondPlayerStats.stl} </li>
                            <li className="list-group-item">Blocks : {this.props.secondPlayerStats.blk} </li>

                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults;