import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './../components/CardList';
import SearchBox from './../components/SearchBox'
import Scroll from './../components/Scroll';
import './App.css';
import ErrorBoundary from './../components/ErrorBoundary';
import { setSearchField } from './../action';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => {
            return dispatch(setSearchField(event.target.value));
        }
    }
}
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
        }
    }

    render () {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if(!this.state.robots.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={ filteredRobots }/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState( { robots : users } );
        });
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);