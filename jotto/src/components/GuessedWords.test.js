import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import GuessedWords from './GuessedWords';
import { test } from '@jest/globals';

const defaultProps = {
    guessedWords: [{guessedWord: "train", letterMatchCount: 3}]
};

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords />)
}

test('does not throw warning', () => {

})