import React, { useEffect, useState } from 'react';
import SetKeyForm from './components/SetKeyForm';
import GetKeyForm from './components/GetKeyForm';
import DeleteKeyForm from './components/DeleteKeyForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import CacheDataList from './components/CacheDataList';

function App() {
  const [cacheData, setCacheData] = useState([]);

  useEffect(() => {
    // Create a WebSocket connection
    try{
       const ws = new WebSocket("ws://localhost:8080/ws")

    // Event listener for receiving messages from the WebSocket server
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      setCacheData(data);
    };

    // Cleanup function to close the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
      
    }catch(error){
      console.log(error);
    }
   
  }, []);

  return (
    <div>
    <div className="container">
      <SetKeyForm />
      <GetKeyForm />
      <DeleteKeyForm />
      <ToastContainer />
    </div>
    <div>
    <CacheDataList cacheData={cacheData} />
    </div>
    </div>
  );
}

export default App;
