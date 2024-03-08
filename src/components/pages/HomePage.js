import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [sum, setSum] = useState(0);
    const [textInput, setTextInput] = useState('');
    const [warning, setWarning] = useState('');
    const [textBoxes, setTextBoxes] = useState([]);

    const handleAddTextBox = () => {
        if (textInput === '' || isNaN(textInput)) {
            setWarning('Please enter a valid number');
            return;
        }

        const newSum = sum + parseInt(textInput);
        setSum(newSum);
        setTextInput('');
        setWarning('');

        setTextBoxes([...textBoxes, textInput]);
    };

    const handleDeleteTextBox = (index, value) => {
        const newTextBoxes = [...textBoxes];
        newTextBoxes.splice(index, 1); 
        setTextBoxes(newTextBoxes);
        setSum(sum - parseInt(value));
    };

    const handleChange = (event) => {
        setTextInput(event.target.value);
        setWarning('');
    };

    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Welcome to our app</h1>
            <div>
                <input type="number" value={textInput} onChange={handleChange} />
                <button className="primary-button" onClick={handleAddTextBox}>Add</button>
            </div>
            {warning && <p>{warning}</p>}
            <div id="textbox-container">
                {textBoxes.map((value, index) => (
                    <div key={index} className="textbox-wrapper">
                        <input type="text" value={value} readOnly />
                        <button className="delete-button" onClick={() => handleDeleteTextBox(index, value)}>Delete</button>
                    </div>
                ))}
            </div>
            <p>Total: {sum}</p>
            <Link to="/tasks">
                <button className="primary-button" id="task_btn">Go to Task Manager</button>
            </Link>
            <Link to="/">
                <button className="primary-button" id="logout_btn">Log out</button>
            </Link>
        </div>
    );
}
