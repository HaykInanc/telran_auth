import React from 'react'
import s from './style.module.sass'
import { auth } from '../../requests/reqres'
import { setCookie, AUTH_TOKEN_NAME, deleteCookie } from '../../requests/cookie_tools'
import { useState } from 'react'


export default function AuthForm() {

  const [message, setMessage] = useState('Set authentication data');
  const submit = event =>{
    event.preventDefault();
    const {password, username} = event.target;
    const auth_data = {
        email: username.value,
        password: password.value
    };
    auth(
      auth_data, 
      token_value => {
        setCookie(AUTH_TOKEN_NAME, token_value.token);
        setMessage('Ok!');
      }, 
      setMessage
    );
    password.value = '';
    username.value = '';
  }
  

  return (
    <form className={s.container} onSubmit={submit}>
        <input type="text" placeholder='Ник' name='username'/>
        <input type="password" placeholder='Пароль' name='password'/>
        <p>{message}</p>
        <button>Войти</button>
        <button type='button' onClick={()=>deleteCookie(AUTH_TOKEN_NAME)}>Выйти</button>
    </form>
  )
}