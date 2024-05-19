import React from "react";
import { shallow, mount } from "enzyme";
import WithLogging from "./WithLogging";

global.console = {
    log: jest.fn(),
};

describe('<WithLogging />', () => {
    it('Makes sure console.log was called on mount and unmount with component', () => {
        const wrappedComponent = (WithLogging(() => <p This is pure HTMl />));
        // const wrapper = mount(wrappedComponent);
        wrappedComponent.mount();
        expect(console.log).toHaveBeenCalled();

        mockConsoleLog.mockRelease();
    });
    
});
