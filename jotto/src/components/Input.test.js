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
const setup = (success=false, secretWord='party') => {
    return shallow(<Input success={success} secretWord={secretWord} />)
}

describe('render', () => {
    describe('success is true', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setup(true);
        });

        test('renders without error', () => {
            const input = findByTestAttr(wrapper, 'component-input')
            expect(input.length).toBe(1);
        })
        test('input box does not show', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(false);
        });
        test('submit button does not show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(false);
        })
    });
    describe('success is false', () => {
        
        let wrapper;
        beforeEach(() => {
            wrapper = setup(false);
        });

        test('renders without error', () => {
            const input = findByTestAttr(wrapper, 'component-input')
            expect(input.length).toBe(1);
        })
        test('input box to show', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(true);
        });
        test('submit button to show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(true);
        })
    })
})

test('does not throw warning', () => {
    checkProps(Input, defaultProps)
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