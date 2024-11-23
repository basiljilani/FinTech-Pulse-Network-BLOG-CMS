import React, { useState } from 'react';
import { signIn } from '@/lib/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const session = await signIn(email, password);
      console.log('Signed in successfully:', session);
    } catch (err) {
      setError('Failed to sign in. Check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignIn;
