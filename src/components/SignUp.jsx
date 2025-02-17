import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../environments/environment';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (password === confirmPassword) {
                var user = await createUserWithEmailAndPassword(auth, email, password);
                console.log(user);
                alert("You are registered successfully");
                setName('');
                setEmail('');
                setContact('');
                setPassword('');
                setConfirmPassword('');
                navigate('/signin');
            }
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

    return (
        <div className='container-fluid w-50'>
            <div className="row">
                <div className="col-md-12 mb-3">
                    <h3 className='text-center text-primary'> Sign Up </h3>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-12 form-group">
                        <label htmlFor=""> Enter your name: </label>
                        <input type="text" className='form-control'
                            value={name} onChange={(e) => setName(e.target.value)}
                            placeholder='Tom Cruise' required />
                    </div>
                </div>
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
                        <label htmlFor=""> Enter your Contact: </label>
                        <input type="tel" className='form-control' placeholder='98765432'
                            value={contact} onChange={(e) => setContact(e.target.value)}
                            minLength={10} maxLength={10} required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12 form-group">
                        <label htmlFor=""> Enter your Password: </label>
                        <input type="password" className='form-control' placeholder='123456'
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12 form-group">
                        <label htmlFor="">  Confirm Password: </label>
                        <input type="password" className='form-control' placeholder='123456'
                            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            required />
                    </div>
                </div>
                <button className="btn btn-success m-auto d-block"> Submit </button>
            </form>
        </div>
    )
}

export default SignUp