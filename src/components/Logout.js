import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const googleStyle={
  cta : {
      width: '100%',
      maxWidth: '600px',
      marginBottom: '20px'
  },
}

function Logout({ name }) {
  let history = useHistory();

  const onSuccess = () => {
    console.log('Logout made successfully');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    history.push("/");
    localStorage.setItem('isLoggedIn', false);
    window.location.reload(false);
  };

  return (
    <div>
      {name&&<span style={{marginRight: '10px'}}>Hi, {name}</span>}
      <GoogleLogout style={googleStyle.cta}
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
