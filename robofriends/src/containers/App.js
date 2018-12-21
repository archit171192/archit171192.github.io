import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './../components/CardList';
import SearchBox from './../components/SearchBox'
import Scroll from './../components/Scroll';
import './App.css';
import ErrorBoundary from './../components/ErrorBoundary';
import { setSearchField, requestRobots } from './../action';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots)
    }
}
class App extends Component {

    render () {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if(isPending) {
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
        this.props.onRequestRobots();
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);