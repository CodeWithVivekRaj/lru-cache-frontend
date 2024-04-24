import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { httpDelete } from '../services/http-service';

const DeleteKeyForm = () => {
  const [key, setKey] = useState('');

  const handleDeleteKey = async () => {
    try {
      const response = await httpDelete(`/delete?key=${key}`);
      toast.success(response.message);
    } catch (error) {
      console.error('Error deleting key:', error);
      toast.error('Error deleting key');
    }
  };

  return (
    <div className="section">
      <h2>Delete Key</h2>
      <div>
        <label>Key:</label>
        <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
      </div>
      <button onClick={handleDeleteKey}>Delete Key</button>
    </div>
  );
};

export default DeleteKeyForm;
