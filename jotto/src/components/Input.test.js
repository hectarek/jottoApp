import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import Input from './Input';

const setup = (props={}) => {
    const setupProps = {...props};
    return shallow(<Input {...setupProps} />)
}

test('renders without error', () => {
    const wrapper = setup();
    const input = findByTestAttr(wrapper, 'guess-input')
})