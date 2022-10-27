import React from 'react'
import s from './style.module.sass'
import { auth } from '../../requests/reqres'

export default function AuthForm() {
  const submit = event =>{
    event.preventDefault()
    const {password, username} = event.target;
    const auth_data = {
        email: username.value,
        password: password.value
    };
    auth(auth_data, console.log);
    password.value = '';
    username.value = ''
  }

  return (
    <form className={s.container} onSubmit={submit}>
        <input type="text" placeholder='Ник' name='username'/>
        <input type="password" placeholder='Пароль' name='password'/>
        <button>Войти</button>
    </form>
  )
}
