import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    render() {
        if(this.state.hasError) {
            return (
                <h1>Ooops. This is not good.</h1>
            );
        }
        return this.props.children;
    }

    // called automatically if an error occurs.
    componentDidCatch() {
        this.setState( { hasError : true } );
    }
}

export default ErrorBoundary;