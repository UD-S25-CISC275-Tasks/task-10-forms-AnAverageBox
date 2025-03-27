import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays = [
        { name: "Halloween", emoji: "🎃", month: 10 }, // October
        { name: "Christmas", emoji: "🎄", month: 12 }, // Christmas
        { name: "Mexican Independence Day", emoji: "🇲🇽", month: 9 }, // September
        { name: "Thanksgiving", emoji: "🦃", month: 11 }, //November
        { name: "Easter", emoji: "🥚🐇", month: 4 } // April
    ];

    const holidaysAlphabetically = [...holidays].sort((a, b) =>
        a.name > b.name ? 1 : -1
    );
    const holidaysByDate = [...holidays].sort((a, b) => a.month - b.month);

    const [currentHoliday, setHoliday] = useState<(typeof holidays)[0]>(
        holidays[0]
    );

    // next holiday alphabetically
    function nextHolidayAlphabet() {
        const currentIndex = holidaysAlphabetically.findIndex(
            (holiday) => holiday.name === currentHoliday.name
        );
        const nextIndex = (currentIndex + 1) % holidaysAlphabetically.length; // modulo prevents indexing errors
        setHoliday(holidaysAlphabetically[nextIndex]);
    }

    // next holiday chronologically
    function nextHolidayInYear() {
        const currentIndex = holidaysByDate.findIndex(
            (holiday) => holiday.name === currentHoliday.name
        );
        const nextIndex = (currentIndex + 1) % holidaysByDate.length;
        setHoliday(holidaysByDate[nextIndex]);
    }

    return (
        <div>
            <h3>Holiday: {currentHoliday.emoji}</h3>
            <Button onClick={nextHolidayAlphabet}>Advance By Alphabet</Button>
            <Button onClick={nextHolidayInYear}>Advance By Year</Button>
        </div>
    );
}
