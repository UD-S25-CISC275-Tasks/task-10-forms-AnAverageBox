import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    //const [isCorrect, setIsCorrect] = useState<boolean>(false);

    const answerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    }; // for changing userAnswer for every change in the input box

    return (
        <div>
            <Form.Group className="expected-elements" controlId="expectedAns">
                <h3>Check Answer</h3>
                <Form.Control
                    type="answer"
                    placeholder="Enter answer"
                    value={userAnswer}
                    onChange={answerChange}
                />
                <h4>{userAnswer === expectedAnswer ? "✔️" : "❌"}</h4>
            </Form.Group>
        </div>
    );
}
