import argentBankLogo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import React from 'react';
//import ButtonSignIn from '../button-signIn/signin'
//import ButtonLogout from '../button-logout/buttonLogout'



export default function header(){
      return(
        <nav class="main-nav">
        <Link class="main-nav-logo" to="/">
          <img
            class="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link class="main-nav-item" to="/signin">
            <i class="fa fa-user-circle"></i>
            Tony
          </Link>
          <Link class="main-nav-item" to="/signin">
            <i class="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      </nav>
        )
}