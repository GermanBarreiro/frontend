import React from 'react';
import './index.css';
import Login from './componet/loginUser.jsx';

function App() {
  return (
    <div className="">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl">¡Bienvenido a mi aplicación de React con Tailwind CSS!</h1>
      </header>
      <div>
        <Login/>
      </div>
    </div>
  );
}

export default App;
