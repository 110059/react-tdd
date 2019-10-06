import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe("test app", () => {
    test("App componet render no child", () => {
        shallow(<App />);
    });
    test("App componet render with child component", () => {
        mount(<App />);
    });

    test('snapshot renders', () => {
        const component = renderer.create(<App />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

