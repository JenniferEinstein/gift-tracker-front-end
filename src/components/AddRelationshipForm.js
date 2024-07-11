// components/AddRelationshipForm.js

import React, { useState } from 'react';
const AddRelationshipForm = () => {
    const [relationship, setRelationship] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/relationships/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({relationship}),
        });
        if(response.ok){
            alert('This relationship type has been succesfully added.')
        } else {
            alert('Failed to add this relationship type.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                value = {relationship}
                onChange = {(e) => setRelationship(e.target.value)}
                placeholder = "New Relationship"
                required
            />
            <button type="submit">Add Relationship</button>
        </form>
    );
};

export default AddRelationshipForm