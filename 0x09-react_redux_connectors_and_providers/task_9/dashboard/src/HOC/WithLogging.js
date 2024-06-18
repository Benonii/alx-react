import React, { Component } from "react";

export default function WithLogging(WrappedComponent) {
    return class extends Component{
        constructor(props) {
            super(props);
            this.componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
            this.displayName = `WithLogging(${this.componentName})`;
        }

        componentDidMount() {
            console.log(`Component ${this.componentName} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${this.componentName} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};