import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../environments/environment';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            setEmail('');
            setPassword('');
            navigate('/todos');
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }
  return (
    <div className='container-fluid w-50'>
    <div className="row">
        <div className="col-md-12 mb-3"> 
            <h3 className='text-center text-primary'> Sign In </h3>
        </div>
    </div>
    <form onSubmit={handleSubmit}>
    
    <div className="row mb-3">
        <div className="col-12 form-group">
            <label htmlFor=""> Enter your Email: </label>
            <input type="email" className='form-control' placeholder='tom@gmail.com'
            value={email} onChange={(e) => setEmail(e.target.value)}
            required />
        </div>
    </div>
   
    <div className="row mb-3">
        <div className="col-12 form-group">
            <label htmlFor=""> Enter your Password: </label>
            <input type="password" className='form-control' placeholder='123456' 
            value={password} onChange={(e) => setPassword(e.target.value)}
            required/>
        </div>
    </div>
    
    <button className="btn btn-success m-auto d-block"> Submit </button>
    </form>
</div>
  )
}

export default SignIn