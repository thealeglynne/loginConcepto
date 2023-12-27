import React, { useState } from 'react';



function LoginForm({ onOpenPopup, onClosePopup, buttonStyle, validUsersData }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validUsersData[username] === password) {
      window.location.href = 'https://www.chwlearninghub.org/blog/';
    } else {
      setError('Credenciales incorrectas');
    }
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
    if (onOpenPopup) {
      onOpenPopup();
    }
  };




  const handleClosePopup = () => {
    setShowPopup(false);
    setError('');
    if (onClosePopup) {
      onClosePopup();
    }
    setShowRegisterPopup(false);
  };


  return (
    <div>
      <button style={buttonStyle} onClick={handleOpenPopup}>
        Abrir Popup
      </button>

      <div className={`background-overlay ${showPopup || showRegisterPopup  ? 'active' : ''}`} onClick={handleClosePopup}></div>

      <div className={`popup-container ${showPopup ? 'active' : ''}`}>
      <div className="login-content"> 
      <div className='InputsContainer'>
      <h3 className='titleLoguin'>Login</h3>
        <h3 className='titleLogion'>Enter your email and password below to sign in.</h3>
      
        <form onSubmit={handleSubmit}>
              <div className="form-group">
               
                <label className='usernameText' htmlFor="username">username</label>
                <input
                placeholder='Type your username'
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="usernameText" htmlFor="password">
                password
                </label>
                <input
                placeholder='Type your password'
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                </div>
              <a className='RememberMeText' href="#">Remember me</a>
              <button className="btnn" type="submit">
                INICIAR
              </button>
        </form>
        
        {error && <p className="error">{error}</p>}
      </div>
      </div>
      </div>
      

    </div>
  );
}

export default LoginForm;