import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [form,setform]=useState({
        username:'',email:'',password:''
    });

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setform({...form, [e.target.name]: e.target.value})

        }
    const handleSubmit =(e)=>{
       e.preventDefault();

       localStorage.setItem("username",form.username);
       localStorage.setItem("email",form.email);
       localStorage.setItem("password",form.password);

       alert('Registered successfully, login now')
       
       setform({username: '',email: '',password: ''});
       navigate('/login');
       
    }
    
  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSubmit}>
            <div>
                <h2>Signup</h2>
                <label>Username</label>
                <input type="text" name='username' value={form.username} onChange={handleChange} required/>
                <label>Email</label>
                <input type="email" name='email' value={form.email} onChange={handleChange} required/>
                <label>Password</label>
                <input type="password" name='password' value={form.password} onChange={handleChange} required/>
                <button type='submit'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default Signup





