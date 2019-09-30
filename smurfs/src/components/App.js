import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmurfsList from './SmurfList';
import SmurfInput from './InputSmurf';
import './App.css';
import { fetchSmurfs, addSmurf } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    const { smurfs, loading, error } = this.props;
    return (
      <div className="App">
        <SmurfInput addSmurf={this.props.addSmurf} error={error} />
        <h1>List of Smurfs</h1>
        <SmurfsList smurfs={smurfs} loading={loading} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App);




