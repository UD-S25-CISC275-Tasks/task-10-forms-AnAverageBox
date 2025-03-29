import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [wantedAttempts, setWantedAttempts] = useState<number>(0);

    const wantedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const parsedValue = Number(value);
        if (!isNaN(parsedValue)) {
            setWantedAttempts(parsedValue); //updates wanted attempts to match text box
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <h6>Attempts Left: {remainingAttempts}</h6>
            <Form.Group controlId="wantedAttempts">
                <Form.Control
                    type="wantedAttempts"
                    placeholder="Wanted re-attempts"
                    value={wantedAttempts}
                    onChange={wantedChange}
                    role="spinbutton" // this is just for the tests
                />
            </Form.Group>

            <Button
                onClick={() => {
                    setRemainingAttempts(remainingAttempts - 1);
                }}
                disabled={remainingAttempts <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setRemainingAttempts(remainingAttempts + wantedAttempts);
                }}
            >
                gain
            </Button>
        </div>
    );
}
