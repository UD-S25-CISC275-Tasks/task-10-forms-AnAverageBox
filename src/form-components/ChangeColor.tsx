import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");

    const colors: string[] = [
        "red",
        "green",
        "blue",
        "pink",
        "orange",
        "white",
        "cyan",
        "purple",
    ];

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChosenColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>

            <Form>
                {colors.map((color) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        label={color.charAt(0).toUpperCase() + color.slice(1)} // capitalization
                        name="color"
                        value={color}
                        checked={chosenColor === color}
                        onChange={handleColorChange}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </Form>

            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "20px",
                    backgroundColor: chosenColor,
                    color: "white", // Set text color to white for contrast
                }}
            >
                The background color is {chosenColor}
            </div>
        </div>
    );
}
