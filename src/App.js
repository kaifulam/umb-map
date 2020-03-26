import React from 'react';
import { connect } from 'react-redux';
import { fetchDataStartAsync } from './redux/data/data.actions';

import Header from './component/header/header.component';
import GoogleMaps from './component/google-map/google-map.component';
import Loading from './component/loading/loading.component';

import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchDataStartAsync();
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header />
          {this.props.isFetching ? (
            <Loading />
          ) : (
              <GoogleMaps />
            )
          }
        </div>
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.data.isFetching
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDataStartAsync: () => dispatch(fetchDataStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


// cluster
// marker color onSelect
// filter year built, building use
// format infowindow
// format filter button when filter is set
// filter value doesn't persist