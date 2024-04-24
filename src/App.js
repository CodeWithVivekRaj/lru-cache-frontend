import React from 'react';
import SetKeyForm from './components/SetKeyForm';
import GetKeyForm from './components/GetKeyForm';
import DeleteKeyForm from './components/DeleteKeyForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <SetKeyForm />
      <GetKeyForm />
      <DeleteKeyForm />
      <ToastContainer />
    </div>
  );
}

export default App;
