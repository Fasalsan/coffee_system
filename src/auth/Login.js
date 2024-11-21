// Login.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/shared/Loading';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Mock login logic; replace with real authentication in a real app
    if (username === 'fasal' && password === '123') {
      const mockUser = { name: username };
      login(mockUser); // Log the user in
      navigate('/dashboard');
      setLoading(false) // Redirect to dashboard
    } else {
      setError('Invalid username or password');
      setLoading(false)
    }
  };

  return (
    <div className='absolute bg-hero bg-no-repeat bg-cover w-full h-screen flex justify-center items-center '>
      {loading && (<Loading />)}
      <div className='bg-white w-[30%] px-6 py-9 rounded-2xl shadow-2xl'>


        <div className='flex justify-center items-center pb-7'>
          <h1 className='text-2xl font-medium text-orange-700'>Login</h1>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form
          className='flex flex-col gap-4 items-center blur-none z-0 relative'
          onSubmit={handleSubmit}>
          <input
            className='border border-[#f5a65d] w-full px-4 py-2 focus:outline-none rounded-lg'
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='border border-[#f5a65d] w-full px-4 py-2 focus:outline-none rounded-lg'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className='bg-orange-700 px-7 py-2 text-white rounded-lg'
            type="submit">Login</button>


        </form>
      </div>
    </div>
  );
}

export default Login;
