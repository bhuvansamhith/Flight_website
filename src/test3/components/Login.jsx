import React, { useState ,useEffect} from 'react';
import { useNavigate,Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

    const [signupMessage, setSignupMessage] = useState('');
    const navigate = useNavigate(); 

    useEffect(() => {
        if(localStorage.getItem('signupSuccess') === 'true'){
          setSignupMessage('Account created successfully! You can now log in.');
          localStorage.removeItem('signupSuccess');
        }
      }, []);

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (form.username === storedUsername && form.password === storedPassword) {
      alert('Login Successful!');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', form.username);
      navigate('/');
    }
    else {
      alert('Invalid Credentials!');
    }
    setForm({ username: '', password: '' });
  };

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Username</label>
        <input type="text" name="username" value={form.username} onChange={handleChange} required/>

        <label>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required/>

        <button type="submit">Login</button>
        <p>Don't have an account ? <Link to="/signup" >Signup</Link></p>
      </form>
      
    </div>
  );
};

export default Login;
