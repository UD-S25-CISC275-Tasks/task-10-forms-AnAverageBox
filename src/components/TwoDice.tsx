import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDice, setLeft] = useState<number>(1);
    const [rightDice, setRight] = useState<number>(2);

    function rollLeft() {
        setLeft(d6());
    }
    function rollRight() {
        setRight(d6());
    }

    return (
        <div>
            <span data-testid="left-die">
                {/* Left die value */}
                Left Die: {leftDice}
            </span>

            <Button onClick={rollLeft}>Roll Left</Button>

            <span data-testid="right-die">
                {/* Right die value */}
                Right Die: {rightDice}
            </span>
            <Button onClick={rollRight}>Roll Right</Button>

            <div>
                {rightDice === leftDice && leftDice !== 1 && <p>Win</p>}
                {rightDice === leftDice && leftDice === 1 && <p>Lose</p>}
            </div>
        </div>
    );
}
