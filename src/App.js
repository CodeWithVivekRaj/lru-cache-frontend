import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; // Import CSS file for styling

function App() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cachedValue, setCachedValue] = useState('');

  const handleGetKey = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/get?key=${key}`).then((response)=>{
        console.log(response);
        setCachedValue(response.data.value);
      }).catch((e)=>{
        toast.error('Error getting key');
      })
    } catch (error) {
      console.error('Error fetching key:', error);
    }
  };

  const handleSetKey = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/set?key=${key}&value=${value}&expiration=${expiration}`);
      toast.success(response.data.message); // Show success toast
    } catch (error) {
      console.error('Error setting key:', error);
      toast.error('Error setting key'); // Show error toast
    }
  };

  const handleDeleteKey = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/delete?key=${key}`);
      toast.success(response.data.message); // Show success toast
    } catch (error) {
      console.error('Error deleting key:', error);
      toast.error('Error deleting key'); // Show error toast
    }
  };

  return (
    <div className="container">
      <div className="section">
        <h2>Set Key</h2>
        <div>
          <label>Key:</label>
          <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
        </div>
        <div>
          <label>Value:</label>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <div>
          <label>Expiration:</label>
          <input type="text" value={expiration} onChange={(e) => setExpiration(e.target.value)} />
        </div>
        <button onClick={handleSetKey}>Set Key</button>
      </div>
      <div className="section">
        <h2>Get Key</h2>
        <div>
          <label>Key:</label>
          <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
        </div>
        <button onClick={handleGetKey}>Get Key</button>
        <div>
          <h3>Cached Value:</h3>
          <p>{cachedValue}</p>
        </div>
      </div>
      <div className="section">
        <h2>Delete Key</h2>
        <div>
          <label>Key:</label>
          <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
        </div>
        <button onClick={handleDeleteKey}>Delete Key</button>
      </div>
      <ToastContainer /> {/* Toast container for notifications */}
    </div>
  );
}

export default App;
