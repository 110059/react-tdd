import React from 'react';
import { shallow, mount } from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel';

describe("Test input component", () => {
    it("checkbox test", () => {
        const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
        expect(checkbox.text()).toEqual('Off');

        checkbox.find('input').simulate('change');

        expect(checkbox.text()).toEqual('On');
    })
})