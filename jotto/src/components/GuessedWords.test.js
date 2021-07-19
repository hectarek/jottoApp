import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import GuessedWords from './GuessedWords';
import { test } from '@jest/globals';

const defaultProps = {
    guessedWords: [{guessedWord: "train", letterMatchCount: 3}]
};

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning', () => {
    checkProps(GuessedWords, defaultProps);
})

describe("if there are no words guessed", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: []});
    })

    test("renders without error", () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test("renders instructions to guess words", () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text()).not.toBe(0);
    });
})

describe("if there are words guessed", () => {
    let wrapper;
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5},
    ]
    beforeEach(() => {
        wrapper = setup({ guessedWords })
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders guess word section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });
    test('correct number of guess words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessedWords.length);
    })
})