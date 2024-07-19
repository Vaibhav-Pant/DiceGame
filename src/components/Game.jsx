import Header from './gameHeader'
import DiceRoll from './diceRoll'
import Rules from './rules'
import { useState } from 'react';

function Game() {

    const [score, newScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, changeError] = useState('');
    const [showRules, setShowRules] = useState(false);


    const randomNumber = (min, max) => {
        return parseInt(Math.random() * (max - min) + min);
    };

    const RollDice = () => {
        if (!selectedNumber) {
            changeError((prev) => ("You have not selected any number"));
            return;
        } else {
            changeError((prev) => (""));
        }
        const rand = randomNumber(1, 7);
        setCurrentDice((prev) => rand);

        if (selectedNumber == rand) {
            newScore((prev) => (prev + rand));
        } else {
            newScore((prev) => (prev - 2));
        }
        setSelectedNumber(undefined);
    };

    const reset = () => {
        newScore((prev) => (0));
        setSelectedNumber(undefined);
        setCurrentDice(1);
        changeError("")
    }

    const toggleRules = () => {
        setShowRules((prev) => (!prev))
    }

    return (
        <>
            <Header
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
                score={score}
                error={error}
            />
            <DiceRoll
                currentDice={currentDice}
                RollDice={RollDice}
                reset={reset}
                toggle = {toggleRules}
                showRules = {showRules}
            />

            {showRules && <Rules/>}

        </>
    )
}

export default Game;
