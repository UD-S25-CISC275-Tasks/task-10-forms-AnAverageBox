import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setselectedOption] = useState<string>(options[0]);

    const handleDropdown = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setselectedOption(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div
                style={{
                    display: "flex",
                    marginRight: "10px",
                    alignItems: "center",
                }}
            >
                <Form.Group style={{ width: "20%" }}>
                    <Form.Select
                        value={selectedOption}
                        onChange={handleDropdown}
                    >
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option.charAt(0).toUpperCase() +
                                    option.slice(1)}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <p>{selectedOption === expectedAnswer ? "✔️" : "❌"}</p>
            </div>
        </div>
    );
}
