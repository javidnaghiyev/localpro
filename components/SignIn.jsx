"use client"

import OutlinedInput from '@mui/material/OutlinedInput';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState } from 'react';

const SignIn = () => {
  const [registerFields, setRegisterFields] = useState(false)

  const handleSignIn = (e) => {
    e.preventDefault();
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Container maxWidth='xs'>
        <form>
          <label htmlFor="username" className={`${registerFields ? 'block' : 'hidden'}`}>Username</label>
          <OutlinedInput type="username" className={`${registerFields ? 'block' : 'hidden'}`} placeholder='Username'/>

          <label htmlFor="email">Email</label>
          <OutlinedInput type="email" className='w-full'/>

          <label htmlFor="password">Password</label>
          <OutlinedInput type="password" className='w-full'/>

          <p className={`w-full text-blue-500 underline cursor-pointer ${registerFields ? 'hidden' : 'block'}`} onClick={() => setRegisterFields(true)}>Register</p>
          <p className={`w-full text-blue-500 underline cursor-pointer ${registerFields ? 'block' : 'hidden'}`} onClick={() => setRegisterFields(false)}>Sign In</p>

          <Button className='w-full' variant='contained' type='submit' onClick={handleSignIn}>Sign In</Button>
        </form>

      </Container>
    </div>
  )
}

export default SignIn