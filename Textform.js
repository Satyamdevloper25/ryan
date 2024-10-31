import React, { useState } from 'react';

export default function Textform() {
    const [text, setText] = useState('Enter Query Here');
    const [isBold, setIsBold] = useState(false); // State to manage bold formatting

    const handleQuery = () => {
        // Convert text to uppercase
        let uppercase = text.toUpperCase(); 
        setText(uppercase); // Update the state with the uppercase text
        console.log("Query Button Clicked!");
    };

    const handleOnChange = (event) => {
        setText(event.target.value); // Update the state with the current input
    };

    const handleBoldLetter = () => {
        // Toggle bold state
        setIsBold(!isBold);
        console.log("Bold Button Clicked!");
    };

    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text Here</label>
                <textarea
                    className="form-control"
                    id="Textarea"
                    rows="5"
                    value={text}
                    onChange={handleOnChange} // Handle text changes
                ></textarea>
                <button type="button" className="btn btn-primary mt-3" onClick={handleQuery}>Convert To Uppercase</button>
                <button type="button" className="btn btn-primary mt-3 ml-10" onClick={handleBoldLetter}>Toggle Bold</button>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
                <p>{(0.008 * text.trim().split(/\s+/).filter(Boolean).length).toFixed(2)} minutes to read</p>
                <p style={{ fontWeight: isBold ? 'bold' : 'normal' }}>{text}</p>
            </div>
        </>
    );
}
