import React from 'react'
import Input from "./Input.jsx";
import Button from './Button.jsx';

const Form = () => {
  return (
    <div>
      <Input id="email" label="Email" required/>
      <Input id="password" label="Password" type="password"/>
      <Button/>
    </div>
  )
}

export default Form;

