import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// Components
import { Reviews } from '../components/reviews'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../redux/actions/reviewsActions'

import { generalErrorMessage } from '../const/errorMessages';


import { SettingsContext, settings } from '../context/settings';
import Filter from '../components/filter';

class App extends Component {

  componentDidMount(){
    this.props.fetchReviews(1)
  }
  loadMore(){
    let page = this.props.requestedPage + 1;
    this.props.fetchReviews(page);
  }
  render() {
    const { fetched,
          reviews,
          error,
          hasMore } = this.props

    //Replace with CSS loading spinner
    const LoadingJSX = <h1 style={{textAlign: 'center'}}>Loading....</h1>; 

    const ReviewsJSX = fetched === true
      ? <Reviews reviews={reviews} />
      : LoadingJSX;

    const ValidatedJSX = error === ''
      ? ReviewsJSX
      : <h3>{generalErrorMessage}</h3>;
    
    const loadMoreBtn = hasMore === false 
      ? null 
      : <button onClick={this.loadMore.bind(this)}>
          LoadMore
        </button>;
        
      return (
              <SettingsContext.Provider value={settings}>
                <div className="mainContainer">
                  <Filter />
                  {ValidatedJSX}
                  {loadMoreBtn}
                </div>
              </SettingsContext.Provider>
        );
      }
    }
App.propTypes = {
  error: PropTypes.string,
  fetchReviews: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  reviews: PropTypes.array.isRequired
}


const mapStateToProps = (state) => {
   return  state.reviews
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)