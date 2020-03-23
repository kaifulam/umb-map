import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './component/header/header.component';
import Loading from './component/fetch-data/fetch-data.component';
import GoogleMaps from './component/google-map/google-map.component';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJson: null,
      isFetching: true
    }
  }

  removeHalf() {
    var holder = this.state.dataJson;
    //console.log(this.props);
    holder.features = this.state.dataJson.features.slice(0, 100)
    this.setState({
      dataJson: holder
    }, () => { console.log(this.state.dataJson) })
  }

  componentDidMount() {
    fetch('https://data.seattle.gov/resource/54qs-2h7f.geojson')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const test = () => {
          this.setState({
            dataJson: data,
            isFetching: false
          }, () => {
            console.log(this.state.dataJson);
            //console.log(this.state.isFetching);
          })
        }
        setTimeout(test, 3000);

        return this.state.dataJson;
      })
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <button onClick={() => this.removeHalf()}>Click Me!</button>
          <Header />
          {
            this.state.isFetching ? (
              <Loading />
            ) : (
                <GoogleMaps dataJson={this.state.dataJson} />
              )
          }
        </div>
      </React.Fragment >
    );
  }
}

function mapStateToProps(state) {
  return {
    lowRisk: state.filter.lowRisk,
    mediumRisk: state.filter.mediumRisk,
    highRisk: state.filter.highRisk
  }
}

export default connect(mapStateToProps, null)(App);