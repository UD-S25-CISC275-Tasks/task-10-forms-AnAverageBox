import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: "Your Name",
        isStudent: true,
    });

    const handleSwitchChange = () => {
        setEditMode(!editMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, name: event.target.value });
    };
    const handleStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setUserInfo({ ...userInfo, isStudent: event.target.checked });
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form>
                <Form.Group controlId="editMode">
                    <Form.Switch
                        id="editModeSwitch"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={handleSwitchChange}
                    />
                </Form.Group>

                {/* if it is in edit mode */}
                {editMode ?
                    <div>
                        <Form.Group>
                            {" "}
                            {/* for name change */}
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={userInfo.name}
                                onChange={handleNameChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            {" "}
                            {/* for student change */}
                            <Form.Check
                                type="checkbox"
                                label="Student"
                                checked={userInfo.isStudent}
                                onChange={handleStudentChange}
                                role="checkbox"
                                aria-label="Student"
                            />
                        </Form.Group>
                    </div>
                :   <div>
                        {" "}
                        {/* for when not in edit mode */}
                        <p>
                            {userInfo.name} is{" "}
                            {userInfo.isStudent ? "a student" : "not a student"}
                        </p>
                    </div>
                }
            </Form>
        </div>
    );
}
