import React from "react";
import { mount } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../test/testUtils";

/**
 * Create wrapper with specified initial conditions,
 * then submit a guessed word of 'train'
 * @function
 *
 * @param {object} state - Inital conditions.
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 */
const setup = (state = {}) => {
	// TODO: apply state;
	const wrapper = mount(<App />);
	// add value to input box
	const input = findByTestAttr(wrapper, "input-box");
	input.simulate("change", { target: { value: "train" } });

	// simulate click on submit button
	const submit = findByTestAttr(wrapper, "submit-button");
	submit.simulate("click", { preventDefault() {} });

	return wrapper;
};

describe('invalid word guessed', () => {
    test.todo('guessWords table does not get another row');
})

describe.only("no words have been guessed", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: "party",
			success: false,
			guessedWords: [],
		});
	});
	test("creates guessedwords table with one row", () => {
		const guessedWordRows = findByTestAttr(wrapper, "guessed-word");
		expect(guessedWordRows).toHaveLength(1);
	});
});

describe("some words have been guessed", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: "party",
			success: false,
			guessedWords: [
				{ guessedWord: "agile", letterMatchCount: 1 },
				{ guessedWord: "tails", letterMatchCount: 2 },
			],
		});
	});
	test("creates words with two rows", () => {
		const guessedWordsRows = findByTestAttr(wrapper, "guessed-words");
		expect(guessedWordsRows.length).toBe(3);
	});
});

describe("the secret word has been guessed", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: "party",
			success: false,
			guessedWords: [
				{ guessedWord: "agile", letterMatchCount: 1 },
				{ guessedWord: "tails", letterMatchCount: 2 },
				{ guessedWord: "parts", letterMatchCount: 4 },
			],
		});

		// add value to input box
		const inputBox = findByTestAttr(wrapper, "input-box");
		const mockEvent = { target: { value: "party" } };
		inputBox.simulate("change", mockEvent);

		// simulate the click on submit
		const submitButton = findByTestAttr(wrapper, "submit-button");
		submitButton.simulate("click", { preventDefault() {} });
	});

	test("add row to guessed words table", () => {
		const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
		expect(guessedWordNodes).toHaveLength(5);
	});
	test("display congrats component", () => {
		const congrats = findByTestAttr(wrapper, "component-congrats");
		expect(congrats.text().length).toBeGreaterThan(0);
	});
    test('does not display input component contents', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.exists()).toBe(false);

        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.exists()).toBe(false);
    })
});
