import React, { Component } from "react";

export default function WithLogging(WrappedComponent) {
    return class extends Component{
        constructor(props) {
            super(props);
            this.componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
            this.displayName = `WithLogging(${this.componentName})`;
        }

        componentDidMount() {
            console.log(`Component ${componentName} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${componentName} is going to unmount`);
        }
    }
};