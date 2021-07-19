import React from "react";
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {

    const [currentGuess, setCurrentGuess] = React.useState('')

    const handleChange = (e) => {
        setCurrentGuess(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentGuess('');
    }

	return (
		<form className="row g-3" data-test="guess-input">
            <div className="col-auto">
                <h4>Enter a Guess:</h4>
            </div>
            <div className="col-auto">
                <label htmlFor="guessWorkInput" className="visually-hidden">Guess a word</label>
                <input data-test="input-box" type="text" className="form-control" id="guessWorkInput" value={currentGuess} onChange={(e) => handleChange(e)} placeholder="Your word" />
            </div>
            <div className="col-auto">
                <button data-test="submit-button" type="submit" className="btn btn-primary mb-3" onClick={(e) => handleSubmit(e)}>Guess</button>
            </div>
        </form>
	);
};

Input.protoTypes = {
    secretWord: PropTypes.string.isRequired,
}

export default Input;
