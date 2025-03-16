import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    setColorIndex
}: {
    setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex((index) => (1 + index) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

<<<<<<< HEAD
function ColorPreview({
    colorIndex
}: {
    colorIndex: number;
}): React.JSX.Element {
=======
function ColorPreview(): React.JSX.Element {
>>>>>>> origin/task-forms
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
<<<<<<< HEAD
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
=======
                backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
>>>>>>> origin/task-forms
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
<<<<<<< HEAD
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
=======
>>>>>>> origin/task-forms
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
<<<<<<< HEAD
                <ChangeColor setColorIndex={setColorIndex}></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
=======
                <ChangeColor></ChangeColor>
                <ColorPreview></ColorPreview>
>>>>>>> origin/task-forms
            </div>
        </div>
    );
}
