import React from 'react';
import LoginForm from './logginForm';

import './App.css';

function App() {
  const handleOpenPopup = () => {
    console.log('Abriendo popup...');
    // Lógica adicional al abrir el popup
  };

  const handleClosePopup = () => {
    console.log('Cerrando popup...');
    // Lógica adicional al cerrar el popup
  };

  const buttonStyle = {
    // Estilos personalizados para el botón
    backgroundColor: 'blue',
    color: 'white',
    // ... otros estilos
  };

  const validUsersData = {
    "WebDevelopers23": "ElSolNec"

    // ... otros usuarios y contraseñas
  };

  return (
    <div className="App">
      <div className='main'>
      <div className='generalContent'>
    <div className='loginCont'>
      <LoginForm
        onOpenPopup={handleOpenPopup}
        onClosePopup={handleClosePopup}
        buttonStyle={buttonStyle}
        validUsersData={validUsersData}
      />
      </div>  
      </div>
      </div>
    </div>
   
  );
}

export default App;
