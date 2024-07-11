// Remove Relationship Form

import React, { useState } from 'react';

const RemoveRelationshipForm = () => {
    const [relationship, setRelationship] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/relationships/remove', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ relationship }),
        });
        if (response.ok) {
            alert('This relationship type was successfully successfully');
        } else {
            alert('Failed to remove relationship type');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                placeholder="Relationship to Remove"
                required
            />
            <button type="submit">Remove Relationship</button>
        </form>
    );
};

export default RemoveRelationshipForm;
