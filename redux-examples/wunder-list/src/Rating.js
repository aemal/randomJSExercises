import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ratingActions from './actions/ratingActions';

class Rating extends Component {
    
    ratingClicked(rate) {
        this.props.ratingClicked(this.props.id, rate);
    }

    render() {
        return (
            <div>
                <button onClick={this.ratingClicked.bind(this, 1)}>1</button>
                <button onClick={this.ratingClicked.bind(this, 2)}>2</button>
                <button onClick={this.ratingClicked.bind(this, 3)}>3</button>
                <button onClick={this.ratingClicked.bind(this, 4)}>4</button>
                <button onClick={this.ratingClicked.bind(this, 5)}>5</button>
                <span>{this.props.selectedRate.rate + " " + this.props.selectedRate.id}</span>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return ({ selectedRate: state.ratingReducer });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ratingActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating);