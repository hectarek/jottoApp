import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import Input from './Input';

// // mock entire module for destructuring useState on import.
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))

const defaultProps = { secretWord: "party" };

/**
 * Setup function for app component
 * @returns {ShallowWrapper}
 */
const setup = (secretWord='party') => {
    return shallow(<Input secretWord={secretWord} />)
}

test('does not throw warning', () => {
    checkProps(Input, defaultProps)
})

test('renders without error', () => {
    const wrapper = setup({success: true});
    const input = findByTestAttr(wrapper, 'guess-input')
    expect(input.length).toBe(1);
})

describe('state controlled input field', () => {

    let mockSetCurrentGuess = jest.fn();
    let wrapper; 
    let originalUseState;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        React.useState = jest.fn(() => ["", mockSetCurrentGuess])
        wrapper = setup();
    })

    afterEach(() => {
        React.useState = originalUseState;
    });

    test('state updates with value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        
        // Do a mock event to say this 
        const mockEvent = { target: {value: 'train'} };
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })
    test('state is cleared when submit is clicked', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        
        submitButton.simulate('click', { preventDefault() {} });
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
    })
})