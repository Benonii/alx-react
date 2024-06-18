// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const { JSDOM } = require('jsdom');


configure({ adapter: new Adapter() });

const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>');

global.document = dom.window.document;
global.window = dom.window;