import React, { useState } from 'react';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleSave = async () => {
    setLoading(true);
    setMessage('');
    try {
      if (!email) {
        setMessage('Email is required.');
        setLoading(false);
        return;
      }

      // Fetch the Cognito token (adjust this if you're using a different auth mechanism)
      const token = localStorage.getItem('cognitoToken'); // Replace with your token retrieval method
      if (!token) {
        setMessage('Missing authentication token.');
        setLoading(false);
        return;
      }

      // Make API call to save user data
      const response = await fetch(import.meta.env.VITE_API_ENDPOINT + '/userdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include token for authorization
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      setMessage('User data saved successfully!');
      console.log('User data saved successfully:', result);
    } catch (error: any) {
      console.error('Error saving user data:', error);
      setMessage(error.message || 'Failed to save user data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSave} disabled={loading}>
          {loading ? 'Saving...' : 'Save User Data'}
        </button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;
