import renderer from 'react-test-renderer';
import React from 'react';
import { Counter } from './AppNew';

describe("Counter", () => {
    test('snap shot render', ()=> {
        const component = renderer.create(<Counter counter="1" />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
