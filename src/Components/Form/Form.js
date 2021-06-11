import React from 'react';
import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <div>
                <form className="container border border-light rounded">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-center">Compare Players</h2>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-xs-2 season">
                            <input type="text" className="form-control season" placeholder="Season.." onChange={this.props.seasonChange} />
                        </div>
                    </div>
                    <br />
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" 
                            placeholder="Enter a player's name.."  
                            onChange={this.props.userChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" 
                            placeholder="Enter a player's name.." 
                            onChange={this.props.userChangeTwo}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <button type="submit" className="btn btn-danger btn-lg btn-block" onClick={this.props.userSubmit}>Search</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Form;
