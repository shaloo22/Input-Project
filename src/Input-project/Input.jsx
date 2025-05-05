import React, { useState } from 'react';
import './input.css';

const Input = () => {
    const [inputBox, setInputBox] = useState('');
    const [items, setItems] = useState([]);
    const [players, setPlayers] = useState([]);

    const addTo = () => {
        if (inputBox.trim() !== '') {
            setItems([...items, inputBox]);
            setInputBox('');
        }
    };

    const addToPlayers = (item) => {
        if (!players.includes(item)) {
            setPlayers([...players, item]);
        }
    };

    const handleDelete = (itemToDelete) => {
        const updatedItems = items.filter(item => item !== itemToDelete);
        setItems(updatedItems);
    };

    const handleDelete2 = (playerToDelete) => {
        const updatedPlayers = players.filter(player => player !== playerToDelete);
        setPlayers(updatedPlayers);
    };

    const handleChange = (e) => {
        setInputBox(e.target.value);
    };

    return (
        <>
            <div className='container'>
                <input
                    className='input-filed'
                    type='text'
                    value={inputBox}
                    onChange={handleChange}
                    placeholder='Enter here...'
                />
                <button className='btn' onClick={addTo}>Add</button>
            </div>

            <div style={{ fontSize: 30, textAlign: 'center', margin: 20 }}>Master Team</div>
            <ul className='master-team'>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => addToPlayers(item)}>Add</button>
                        <button onClick={() => handleDelete(item)}>Delete</button>
                    </li>
                ))}
            </ul>

            <div style={{ fontSize: 30, textAlign: 'center', margin: 20 }}>Players Team</div>
            <ul className='player-team'>
                {players.map((player, index) => (
                    <li key={index}>
                        {player}
                        <button onClick={() => handleDelete2(player)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Input;
