import React from "react";

const Input = (props) => {
	return (
		<form className="row g-3" data-test="guess-input">
            <div className="col-auto">
                <h4>Enter a Guess:</h4>
            </div>
            <div className="col-auto">
                <label for="guessWorkInput" className="visually-hidden">Guess a word</label>
                <input type="password" className="form-control" id="guessWorkInput" placeholder="Your word" />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Guess</button>
            </div>
        </form>
	);
};

export default Input;
