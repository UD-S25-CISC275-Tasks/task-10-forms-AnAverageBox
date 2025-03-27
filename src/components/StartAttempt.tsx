import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [quizInProgress, setQuizInProgress] = useState(false);

    function startQuiz() {
        if (attempts > 0) {
            setQuizInProgress(true);
            setAttempts(attempts - 1);
        }
    }

    function stopQuiz() {
        setQuizInProgress(false);
    }

    function mulligan() {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <p>Attempts: {attempts}</p>
            <Button
                onClick={startQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
