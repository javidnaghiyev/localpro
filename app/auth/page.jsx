"use client"

import OutlinedInput from '@mui/material/OutlinedInput';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState } from 'react';

const auth = () => {
  const [registerFields, setRegisterFields] = useState(false)

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Container maxWidth='xs'>
        <form>
          <label htmlFor="username">Username</label>
          <OutlinedInput type="username" className={`${registerFields ? 'block' : 'hidden'}`} placeholder='Username'/>

          <label htmlFor="email">Email</label>
          <OutlinedInput type="email" className='w-full'/>

          <label htmlFor="password">Password</label>
          <OutlinedInput type="password" className='w-full'/>

          <p className='w-full text-blue-500 underline cursor-pointer' onClick={() => setRegisterFields(true)}>Register here</p>

          <Button className='w-full' variant='contained'>Sign In</Button>
        </form>

      </Container>
    </div>
  )
}

export default auth